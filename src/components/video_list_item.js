import React, { PropTypes } from 'react'

const VideoListItem = ({video, onVideoClick}) => {
    const videoURL = video.snippet.thumbnails.default.url;
    const title = video.snippet.title;
    return (
      <li onClick={() => onVideoClick(video)} className="list-group-item">
        <div className="video-list media">
          <div className="media-left">
            <img src={videoURL} alt={title} className="media-object" />
          </div>
          <div className="media-body">
            <div className="media-heading">{title}</div>
          </div>
        </div>
      </li>
    );
}

export default VideoListItem
