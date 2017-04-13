

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
			console.log("actions in movieGetReducer : ", action)
			return [
				...state,
				{
					searchTime: moment().unix(),
					data: action.payload
					
				}
			]
		default:
			return state;
	}
}

export var moviePageReducer = (state = {}, action) => {
	switch (action.type){
		default:
			return state;
	}
}