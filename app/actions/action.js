import * as API from '../api/fetchApi'
var store= require('../store/configureStore').configure();

import axios from 'axios';

export var getMovieSearch = (payload) => {
		API.searchMovie(payload)
		  return {
				type: 'SEARCH_MOVIE',
				payload
			};
};


export var getMovieList = (payload) => {
	return {
		type: 'GET_MOVIE_LIST',
		payload
	}
}

