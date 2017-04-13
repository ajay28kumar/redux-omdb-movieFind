// import * as API from '../api/fetchApi'
var store= require('../store/configureStore').configure();

import axios from 'axios';

 var getMovieSearch = (payload) => {
		// API.searchMovie(payload)
		  return {
				type: 'SEARCH_MOVIE',
				payload
			};
};

 var getMovieList = (payload) => {
	return {
		type: 'GET_MOVIE_LIST',
		payload
	}
};


var getMoviePageRequest = (payload) => {
	return {
		type : "REQUEST_MOVIE_PAGE",
		payload
	}
}

var getMoviePageSuccess = (payload) => {
	console.log(payload , "data of page")
	return {
		type : "SUCCESS_MOVIE_PAGE",
		payload
	}
}


export var getMovieRequest = (payload) => (dispatch) => {
  dispatch(getMovieSearch(payload));
  axios.get("http://www.omdbapi.com/?s=" + payload + "&page=1")
    .then((res) => {
      dispatch(getMovieList(res.data));
    })
    .catch((err) => {
      dispatch(getMovieList(err));
    })
};

export var searchMoviePage = (payload) => (dispatch) => {
  dispatch(getMoviePageRequest(payload));
  axios.get("http://www.omdbapi.com/?i=" + payload)
    .then((res) => {
      dispatch(getMoviePageSuccess(res.data));
    })
    .catch((err) => {
      dispatch(getMoviePageSuccess(err));
    })
};