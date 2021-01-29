import React, { useState } from 'react';
import './VideoSideBar.css';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MessageIcon from '@material-ui/icons/Message';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

function VideoSideBar() {
	const [ liked, setLiked ] = useState(false);
	return (
		<div className="videoSideBar">
			<div className="videoSideBar__button">
				{liked ? (
					<FavoriteIcon fontSize="large" />
				) : (
					<FavoriteBorderIcon fontSize="large" onClick={(e) => setLiked(true)} />
				)}
				<p>100</p>
			</div>

			<div className="videoSideBar__button">
				{liked ? (
					<MessageIcon fontSize="large" />
				) : (
					<FavoriteBorderIcon fontSize="large" onClick={(e) => setLiked(true)} />
				)}
				<p>250</p>
			</div>

			<div className="videoSideBar__button">
				{liked ? (
					<ShareIcon fontSize="large" />
				) : (
					<FavoriteBorderIcon fontSize="large" onClick={(e) => setLiked(true)} />
				)}
				<p>500</p>
			</div>
		</div>
	);
}

export default VideoSideBar;
