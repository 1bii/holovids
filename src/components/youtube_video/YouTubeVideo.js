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

    render() {
        return (<div className="video-container">
            <img className="video" src={this.imageUrl} alt={this.title} width="500" height="600"></img>
            <div className="title">{this.title}</div>
        </div>);
    }
}

export default YouTubeVideo;