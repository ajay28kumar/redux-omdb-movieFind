
import * as redux from 'redux';
// var redux= require('redux');
import thunk from 'redux-thunk'
import  { moviesearchReducer, movieGetReducer, moviePageReducer} from './../reducers/reducers';

// import Async from '../middleware/async';



export var configure = (initialState={}) => {
	var reducer= redux.combineReducers({
		movieSearch : moviesearchReducer,
		movieList : movieGetReducer,
		moviePage : moviePageReducer
	});

	var store = redux.createStore(reducer, initialState, redux.compose(

			redux.applyMiddleware(thunk),

			window.devToolsExtension ? window.devToolsExtension() : f => f
		));


	return store;
}