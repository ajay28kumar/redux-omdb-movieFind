import React from 'react';
import { render } from 'react-dom'
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import {Provider} from 'react-redux';
import MovieSearchApp from './components/movieApp';
import MoviePage from './components/moviePage';

var action= require('./actions/action');


var store= require('./store/configureStore').configure();

store.subscribe( ()=>{
	var state= store.getState()
	console.log("new state: ", store);

});

// console.log("current state: ", store.getState())





const Root = ({ store }) => (
  	<Provider store={store}>
	    <Router history={hashHistory}>
			<Route path="/" component={MovieSearchApp}/>
			<Route path="/:movieID" component={MoviePage}/>
		</Router>
  	</Provider>
);
render(
    <Root store={store} />,
    document.getElementById('app')
)
