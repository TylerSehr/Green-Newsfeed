const axios = require('axios')
const rp = require('request-promise')

class GreenNewsFeedBuilder {
	constructor(searchTerms) { // arrays of search terms
		this.feed = [];
		this.searchTerms = searchTerms
		this.data = []

		this.getNews()
	}

	shuffle(a) {
		for (let i = a.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[a[i], a[j]] = [a[j], a[i]];
		}
		return a;
	}

	createGreenFeed() { // this holds the algorithm that sorts the newsfeed
			this.data.forEach(dataset => {
				this.feed = this.feed.concat(dataset.articles)
			})	

			this.shuffle(this.feed)
			this.data = [];
	}

	getNews() {
		const requestPromises = []
		this.searchTerms.forEach( searchTerm => { // support weights on individual search terms
			const requestOptions = {
				uri: `https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=b559815e1ace42d1ae286c501f5a1d29`,
				method: 'GET',
				json: true
			}
			requestPromises.push(rp(requestOptions));      
		})
		Promise.all(requestPromises)
		.then((data)=>{
			this.data = data;		
			this.createGreenFeed();
		})
		.catch((error)=>{
			console.log(error);
			
		})
	}

}

// class NewsFeedComponent {
// 	constructor(searchTerms) {
// 		this.feed = [];
// 		this.weight = 1;
// 		this.searchTerms = searchTerms;
// 		this.apiKey = 'b559815e1ace42d1ae286c501f5a1d29';

// 		this.getNews()
// 	}

// 	getNews() {
// 		const requestPromises = []
// 		this.searchTerms.forEach( searchTerm => {
// 			const requestOptions = {
// 				uri: `https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=b559815e1ace42d1ae286c501f5a1d29`,
// 				method: 'GET',
// 				json: true
// 			}
// 			requestPromises.push(rp(requestOptions));      
// 		})
// 		Promise.all(requestPromises)
// 		.then((data)=>{
// 			data.forEach( request => {
// 				this.feed = this.feed.concat(request.articles)
// 			})			
// 			GreenNewsFeedBuilder.createGreenFeed();
// 		})
// 		.catch((error)=>{
// 			console.log(error);
			
// 		})


// 		// this.searchTerms.forEach((searchTerm, index) => {
// 		// 	axios.get(`https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=b559815e1ace42d1ae286c501f5a1d29`)
// 		// 		.then((response) => {
// 		// 			this.feed.push(...response.data.articles)
// 		// 			GreenNewsFeedBuilder.createGreenFeed();
// 		// 		})
// 		// })
// 	}


// }

// class InstagramFeedComponent {
// 	constructor(searchTerms) {
// 		this.feed = [];
// 		this.weight = 1;
// 		this.searchTerms = searchTerms;
// 		this.apiKey = ''
// 	}
// }

// class YoutubeFeedComponent {
// 	constructor(searchTerms) {
// 		this.googleFeed = [];
// 		this.weight = 1;
// 		this.searchTerms = searchTerms;
// 		this.apiKey = ''
// 	}
// }


module.exports = GreenNewsFeedBuilder