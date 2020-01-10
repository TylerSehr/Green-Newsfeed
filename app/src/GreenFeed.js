import React from 'react'
import axios from 'axios'
import GreenFeedCard from './GreenFeedCard'
import './GreenFeed.css'

class GreenFeed extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			greenfeed: []
		}
	}

	componentDidMount() {
		axios.get('/greenfeed').then((res) => {
			console.log(res.data.feed);
			this.setState({
				greenfeed: res.data.feed
			})
		})
	}

	render() {
		let content;

		content = this.state.greenfeed.map((article, index) => {
			return (<GreenFeedCard article={article} key={index}/>)
		})

		return (
			<div>
				{content}
			</div>
		)
	}
}

export default GreenFeed