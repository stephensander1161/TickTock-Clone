import React, { useState, useRef } from 'react';
import './Video.css';
import VideoFooter from './VideoFooter';
import VideoSideBar from './VideoSideBar';
import ReactPlayer from 'react-player';

function Video({ url, channel, description, song, likes, messages, shares }) {
	const [ playing, setPlaying ] = useState(false);
	const videoRef = useRef(null);

	const handleVideoPress = () => {
		if (playing) {
			videoRef.current.pause();
			setPlaying(false);
		} else {
			videoRef.current.play();
			setPlaying(true);
		}
	};
	return (
		<div className="video">
			<ReactPlayer onClick={handleVideoPress} className="video__player" loop ref={videoRef} url={url} />

			<VideoFooter channel={channel} description={description} song={song} />
			<VideoSideBar likes={likes} shares={shares} messages={messages} />
		</div>
	);
}

export default Video;
