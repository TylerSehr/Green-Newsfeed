import React from 'react'

class GreenFeedCard extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {

		console.log(this.props.article);
		

		return (
			<div className="card">
				<img src={this.props.article.urlToImage} width="20px" alt="Avatar" />
				<div className="container">
					<h4><b>{this.props.article.title}</b></h4>
					<p>{this.props.article.author}</p>
				</div>
			</div>
		)
	}
}

export default GreenFeedCard