
import * as Action from '../actions/action';

var store= require('../store/configureStore').configure();



export var searchMovie =(movieName) => {
	console.log("movieName : ", movieName);
	CallAPI(movieName, 'GET')
		.then((_data) => {
			store.dispatch(Action.getMovieList(_data));
		})
		.catch((_error) =>{
			console.log("_error" : _error)
		})

}

const CallAPI= (url,method ,postBody)=> {
	return new Promise(function(resolve, reject){
		$.ajax({
			url: "http://www.omdbapi.com/?t="+ url+ "&page=1",
			data: postBody,
			method: method,
			dataType: 'json',
			success: function(data){
				resolve(data)
			},
			error: function(data){
                //reject(data)
			}

		})	
	}) 
}