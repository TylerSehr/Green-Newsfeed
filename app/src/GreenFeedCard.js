import React from 'react'

class GreenFeedCard extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			imageStyle: 'highres'
		}
	}

	

	render() {

		// console.log(this.props.article);

		let reactThis = this;
		let img = new Image();
		img.src = this.props.article.urlToImage;
		img.onload = function () {
			if (this.width < 200 && reactThis.state.imageStyle === 'highres') {
				reactThis.setState({
					imageStyle: 'lowres'
				})
			}
		}

		return (
			<div className="card" onClick={() => {window.location.href = this.props.article.url }}>
				<img className={this.state.imageStyle} src={this.props.article.urlToImage} alt="Avatar" />
				<div className="container">
					<h4><b>{this.props.article.title}</b></h4>
					<hr></hr>
					<p className="description">{this.props.article.description.substring(0, 150) + '...'}</p>
					<p className="sourcename">{this.props.article.source.name}</p>
				</div>
			</div>
		)
	}
}

export default GreenFeedCard