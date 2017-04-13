import React from 'react';
import {connect} from 'react-redux'


class MoviePage extends React.Component {
	render (){
		console.log("route is: ", this.props.params.movieID)
		return (
			<div className="container">
				<h1>MoviePage</h1>
			</div>
			)
	}
}


export default MoviePage;