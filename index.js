const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 6970;

const anilist = require('./anilist.json');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
	return res.status(200).send('Nothing to see here');
})

app.get('/get-anime', (req, res) => {
	return res.status(401).send('POST request man, not GET');
})

app.post('/get-anime', (req, res) => {
	const year = ~~req.body.year;
	return res.status(200).json({ data: anilist.filter(e => e.year >= year) });
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});