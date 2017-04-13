

var uuid = require('node-uuid');
var moment = require('moment');



export var moviesearchReducer = (state= "", action) => {
	switch(action.type){
		case 'SEARCH_MOVIE':
			return action.payload
		default:
			return state
	}
}





export var movieGetReducer = (state = [], action) => {
	switch (action.type){
		case 'GET_MOVIE_LIST':
			return [
				
				{	
					data: action.payload.Search,
					searchTime: moment().format('MMMM Do YYYY, h:mm:ss a'),
					total_length: (action.payload.Search).length,
					total_results: action.payload.totalResults
				}
			]
		default:
			return state;
	}
}

export var moviePageReducer = (state = {}, action) => {
	switch (action.type){
		case "REQUEST_MOVIE_PAGE": 
			return {
				...state ,
				[action.payload] : {
					status: "requested"
				}
			}
		case "SUCCESS_MOVIE_PAGE":
			return{
				...state,
				[action.payload.imdbID] : {
					status : "success",
					details: action.payload
				}
			}
		default:
			return state;
	}
}