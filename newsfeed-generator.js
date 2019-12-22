const axios = require('axios')

class GreenNewsFeedBuilder {
	constructor(search, igSearch, ytSearch) { // arrays of search terms
		this.googleData = new NewsFeedComponent(search);
		// this.igSearch = new InstagramFeedComponent(igSearch);
		// this.ytSearch = new YoutubeFeedComponent(ytSearch)
	}
}

class NewsFeedComponent {
	constructor(searchTerms) {
		this.feed = [];
		this.weight = 1;
		this.searchTerms = searchTerms;
		this.apiKey = 'b559815e1ace42d1ae286c501f5a1d29';

		this.getNews()
	}

	getNews() {
		this.searchTerms.forEach((searchTerm, index) => {
			axios.get(`https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=b559815e1ace42d1ae286c501f5a1d29`)
			.then((response) => {
				this.feed[index] = response.data
			})
		})
	}


}

class InstagramFeedComponent {
	constructor(searchTerms) {
		this.feed = [];
		this.weight = 1;
		this.searchTerms = searchTerms;
		this.apiKey
	}
}

class YoutubeFeedComponent {
	constructor(searchTerms) {
		this.googleFeed = [];
		this.weight = 1;
		this.searchTerms = searchTerms;
		this.apiKey
	}
}

const GreenNewsFeed = new GreenNewsFeedBuilder(['green', 'energy'], ['green'], ['green'])