import React from 'react'

class GreenFeedCard extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {

		console.log(this.props.article);
		

		return (
			<div className="card">
				<img src={this.props.article.urlToImage}  alt="Avatar" />
				<div className="container">
					<h4><b>{this.props.article.title}</b></h4>
					<p className="description">{this.props.article.description.substring(0, 100)}</p>
					<p className="sourcename">{this.props.article.source.name}</p>
				</div>
			</div>
		)
	}
}

export default GreenFeedCard