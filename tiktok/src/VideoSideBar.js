import React, { useState } from 'react';
import './VideoSideBar.css';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MessageIcon from '@material-ui/icons/Message';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import MessageBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShareBorderIcon from '@material-ui/icons/FavoriteBorder';

function VideoSideBar({ likes, shares, messages }) {
	const [ liked, setLiked ] = useState(false);
	const [ shared, setShared ] = useState(false);
	const [ message, setMessage ] = useState(false);

	return (
		<div className="videoSideBar">
			<div className="videoSideBar__button">
				{liked ? (
					<FavoriteBorderIcon fontSize="large" onClick={(e) => setLiked(false)} />
				) : (
					<FavoriteIcon fontSize="large" onClick={(e) => setLiked(true)} />
				)}
				<p>{liked ? likes + 1 : likes} </p>
			</div>

			<div className="videoSideBar__button">
				{message ? (
					<MessageBorderIcon fontSize="large" onClick={(e) => setMessage(false)} />
				) : (
					<MessageIcon fontSize="large" onClick={(e) => setMessage(true)} />
				)}
				<p>{message ? messages + 1 : messages} </p>
			</div>

			<div className="videoSideBar__button">
				{shared ? (
					<ShareBorderIcon fontSize="large" onClick={(e) => setShared(false)} />
				) : (
					<ShareIcon fontSize="large" onClick={(e) => setShared(true)} />
				)}
				<p>{shared ? shares + 1 : shares} </p>
			</div>
		</div>
	);
}

export default VideoSideBar;
