import React, { useState, useRef } from 'react';
import './Video.css';
import day8 from './media/Day 8.mp4';
import VideoFooter from './VideoFooter';
import VideoSideBar from './VideoSideBar';

function Video() {
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
			<video onClick={handleVideoPress} className="video__player" loop ref={videoRef} src={day8} />

			<VideoFooter />
			<VideoSideBar />
		</div>
	);
}

export default Video;
