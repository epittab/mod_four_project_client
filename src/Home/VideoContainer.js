import React from 'react'

import YouTube from 'react-youtube'
import ReactPlayer from "react-player"

//reference from below
//https://www.npmjs.com/package/react-youtube

class VideoContainer extends React.Component {
    render() {
        const opts = {
            height: '390',
            width: '640',
            playerVars: {
                // https://developers.google.com/youtube/player_parameters
                autoplay: 1,
              },
            };

        return (
        // <YouTube videoID="Cj7CBPui5XY" opts={opts} onReady={this._onReady} />
        <ReactPlayer
        url="https://www.youtube.com/watch?v=SUMWVZdYHNw"
      />
       )}

    _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }
}

export default VideoContainer