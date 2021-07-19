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
        return `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${channelId}&part=snippet,id&order=date&maxResults=${MAX_RESULTS}`;
    }

    async getVideo(channelKey) {
        const storedDataString = localStorage.getItem(channelKey);
        if (storedDataString && storedDataString !== 'undefined') {
            return JSON.parse(storedDataString);
        }
        return await this.fetchVideo(channelKey);
    }

    async fetchVideo(channelKey) {
        const channelId = Channels[channelKey].id;
        const requestUrl = this.getRequestUrl(channelId);
        const data = await fetch(requestUrl)
            .then(resp => resp.json())
            .then(data => data?.items?.map(item => {
                return {
                    videoId: item.id.videoId,
                    thumbnails: item.snippet.thumbnails,
                    title: item.snippet.title,
                    description: item.snippet.description,
                    publishedAt: moment(item.snippet.publishedAt)
                };
            }));
        localStorage.setItem(channelKey, JSON.stringify(data));
        return data;
    }

    getAllVideos() {
        const channelKeys = Object.keys(Channels);
        Promise.all(channelKeys.map(key => this.getVideo(key))).then(dataArr => {
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
                video.title.toLowerCase().includes(keyword.toLowerCase()) ||
                video.description.toLowerCase().includes(keyword.toLowerCase())));
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