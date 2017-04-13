import React from 'react';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import MovieSearch from './movieSearch';
import MovieList from './movieList';




const MovieSearchApp = () => {
	return(
		<div className="col-md-12">
	  		<MovieSearch/>
	  		<MovieList/>
	  	</div>
		)
}





export default MovieSearchApp;