import React from 'react';
import { API_KEY, Channels, Keywords } from '../../constants';
import moment from 'moment'
import YouTubeVideo from '../youtube_video/YouTubeVideo'
import './VideoGallery.scss';

const MAX_RESULTS = 100;

class VideoGallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = { videos: [] };
    }

    getRequestUrl(channelId) {
        return `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${channelId}&part=snippet,id&order=date&maxResults=${MAX_RESULTS}&type=video`;
    }

    async getVideos(channelKey) {
        const storedDataString = localStorage.getItem(channelKey);
        let storedVideos = [];
        if (storedDataString && storedDataString !== 'undefined') {
            const data = JSON.parse(storedDataString);
            storedVideos = data.videos;
            const setTime = data.setTime && moment(data.setTime);
            if (setTime && moment().diff(setTime, 'days') < 1) {
                return storedVideos;
            }
        }
        const fetchedVideos = await this.fetchVideo(channelKey);
        return (fetchedVideos.length && fetchedVideos) || storedVideos;
    }

    async fetchVideo(channelKey) {
        const channelId = Channels[channelKey].id;
        const requestUrl = this.getRequestUrl(channelId);
        const data = await fetch(requestUrl)
            .then(response => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response;
            })
            .then(response => response.json())
            .catch(error => {
                console.log(error);
                return [];
            })
            .then(data => data?.items?.map(item => {
                return {
                    videoId: item.id.videoId,
                    thumbnails: item.snippet.thumbnails,
                    title: item.snippet.title,
                    description: item.snippet.description,
                    publishedAt: moment(item.snippet.publishedAt)
                };
            }));
        const entireData = {
            videos: data,
            setTime: data?.length && moment(),
        };
        localStorage.setItem(channelKey, JSON.stringify(entireData));
        return data || [];
    }

    getAllVideos() {
        const channelKeys = Object.keys(Channels);
        Promise.all(channelKeys.map(key => this.getVideos(key))).then(dataArr => {
            const videos =
                this.preprocessVideos(dataArr.flatMap(data => {
                    if (!data) {
                        return [];
                    }
                    return this.filterVideos(data);
                }));
            this.sortVideos(videos);
            this.setState({ videos });
            console.log(videos);
        });
    }

    sortVideos(videos) {
        videos.sort((a, b) => b.publishedAt.diff(a.publishedAt));
    }

    // checks videoId exists and title/description match the keywords
    filterVideos(videos) {
        return videos.filter(video =>
            video.videoId && Keywords.some(keyword =>
                video.title.toLowerCase().includes(keyword.toLowerCase())));
    }

    // preprocessed videos, publishedAt might not be a moment object after retrieving
    preprocessVideos(videos) {
        return videos.map(video => {
            return {
                ...video,
                publishedAt: moment(video.publishedAt)
            };
        })
    }

    componentDidMount() {
        this.getAllVideos();
    }

    render() {
        return (
            <div className="video-wrapper">
                {
                    this.state.videos.map(video =>
                        <YouTubeVideo obj={video}></YouTubeVideo>
                    )
                }
            </div>
        );
    }
}

export default VideoGallery;