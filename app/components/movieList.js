import React from 'react';
import {connect} from 'react-redux';


class MovieList extends React.Component {
	constructor(props){

      super(props);
      this.state = {
      	data : this.props.state
      }

    }

	render (){
		console.log("data: ", this.props.state.movieList)
		return (
			<div className="container">
				<pre>{JSON.stringify(this.props.state.movieList[0], null, 2) }</pre>
			</div>
			)
	}
}


export default connect(
		(state)=> {
			console.log("state: ", state)
			return {
				state
			}
		}
	)(MovieList);