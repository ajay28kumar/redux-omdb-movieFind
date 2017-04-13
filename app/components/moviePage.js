import React from 'react';
import {connect} from 'react-redux'
import {searchMoviePage} from '../actions/action';


class MoviePage extends React.Component {
	componentWillMount(){
		var {dispatch} = this.props;
		dispatch(searchMoviePage(this.props.params.movieID));
	}
	render (){
		console.log("route is: ", this.props.params.movieID)
		return (
			<div className="container">
				<h1>MoviePage</h1>
			</div>
			)
	}
}


export default connect()(MoviePage);