import React from 'react';
import {connect} from 'react-redux';
import {getMovieRequest} from '../actions/action';


class MovieSearch extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {value: ""};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({value: event.target.value});
	}

	handleSubmit(event) {
		console.log('A name was submitted: ' ,this.state.value);
		var {dispatch} = this.props;
		dispatch(getMovieRequest(this.state.value));
		event.preventDefault();
		

	}
	render (){
		return (
			<form className="form-group" onSubmit={this.handleSubmit}>
			  	<div className="form-group">
			  		
				      <input type="text" className="form-control" value={this.state.value} onChange={this.handleChange} 
				      		placeholder="Type movies here" />
				    
			  	</div>
			  	<button type="submit" className="btn btn-primary btn-block">Search</button>
			</form>
			)
	}
}


export default connect()(MovieSearch) ;