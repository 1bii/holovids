import React from 'react';
import './YouTubeVideo.scss';

class YouTubeVideo extends React.Component {
    get imageUrl() {
        const thumbnails = this.props.obj.thumbnails;
        return thumbnails.high?.url || thumbnails.medium?.url || thumbnails.default?.url;
    }

    get title() {
        return this.props.obj.title;
    }

    openLink() {
        const link = `https://www.youtube.com/watch?v=${this.props.obj.videoId}`;
        window.open(link, "_blank");
    }

    render() {
        return (<div className="video-container" onClick={()=> this.openLink()}>
            <img className="video" src={this.imageUrl} alt={this.title} width="500" height="600"></img>
            <div className="title">{this.title}</div>
        </div>);
    }
}

export default YouTubeVideo;