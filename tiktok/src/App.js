import './App.css';
import Video from './Video';
import axios from './axios';
import { useState, useEffect } from 'react';

function App() {
	const [ videos, setVideos ] = useState([]);

	useEffect(() => {
		async function fetchPosts() {
			const response = await axios.get('./v2/posts');
			setVideos(response.data);

			return response;
		}

		fetchPosts();
	}, []);
	return (
		<div className="app">
			<h1 className="title"> What is Stephen Watching?</h1>

			<div className="app__videos">
				{videos.map(({ url, channel, description, song, likes, messages, shares }) => (
					<Video
						url={url}
						channel={channel}
						song={song}
						likes={likes}
						messages={messages}
						description={description}
						shares={shares}
					/>
				))};
			</div>
		</div>
	);
}

export default App;
