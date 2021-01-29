import './App.css';
import Video from './Video';
import day8 from './media/Day 8.mp4';

function App() {
	return (
		<div className="app">
			<h1>Hi Moms</h1>

			<div className="app__videos">
				<Video
					url={day8}
					channel="sandman"
					description="come hang with the man of sand"
					song="will you love me"
					likes={123}
					messages={456}
					shares={234}
				/>
				<Video />
			</div>
		</div>
	);
}

export default App;
