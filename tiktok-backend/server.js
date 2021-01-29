const express = require('express');
const mongoose = require('mongoose');

const Data = require('./data.js');
const Videos = require('./dbModel.js');

import dotenv from 'dotenv';

//App config
const app = express();
const port = process.env.PORT || 9000;
dotenv.config();

//Middlewares
app.use(express.json());
app.use((req, res, next) => {
	res.setHeaders('Access-Control-Allow-Origin', '*'), res.setHeaders('Access-Control-Allow-Headers', '*'), next();
});

//DB Config
const CONNECTION_URL = process.env.REACT_APP_DBCONSTRING;
mongoose.connect(CONNECTION_URL, {
	useUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true
});

//API endpoints
app.get('/', (req, res) => res.status(200).send('hello world'));

app.get('/v1/posts', (req, res) => res.status(200).send(Data));

app.get('/v2/posts', (req, res) => {
	Videos.find((err, data) => {
		if (err) {
			res.status(500).send(err);
		} else {
			res.status(200).send(data);
		}
	});
});

app.post('/v2/posts', (req, res) => {
	const dbVideos = req.body;

	Videos.create(dbVideos, (err, data) => {
		if (err) {
			res.status(500).send(err);
		} else {
			res.status(201).send(data);
		}
	});
});

//Listen
app.listen(port, () => console.log(`listening on localhost:${port}`));
