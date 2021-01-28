import React from 'react';

const VideoPlayer = ({video}) => {
  if (!video) {
    return <div>Loading...</div>
  }

  const url = `https://youtube.com/embed/${video.id.videoId}`
  
  return (
    <div className="ui segment">
      <div className="ui embed">
        <iframe title="video player" src={url}></iframe>
      </div>
      <div className="ui header">{video.snippet.title}</div>
      <p>{video.snippet.description}</p>
    </div>
  )
}

export default VideoPlayer;