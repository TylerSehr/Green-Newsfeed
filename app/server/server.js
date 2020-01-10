const express = require('express')
const app = express()
const GreenNewsFeedBuilder = require('./newsfeed-generator')

const bodyParser = require('body-parser');

const NewsFeed = new GreenNewsFeedBuilder(['green energy', 'solar panels', 'tesla'], []) // put this in a cronjob to get new articles

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static('build'))

app.get('/greenfeed', (req, res) => {
	res.send(NewsFeed) // only send part of the feed in one request
})


const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
	console.log(`listening on port: ${PORT}`);
	
})