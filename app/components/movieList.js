import React from 'react';
import {connect} from 'react-redux';
import {MovieData} from './movieData';


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
				<div className="row">
					{this.props.state.movieList[0] ?
						this.props.state.movieList[0].data.map((movie, index) =>{
    	    				if(index % 3 ==2){
    	    					return (
    	    						<div>
    	    							<MovieData movie= {movie} key={index} />
    	    							<div className="clearfix"></div>
    	    						</div>
    	    						)
    	    				}else{
    	    					return <MovieData movie= {movie} key={index} />
    	    				}
    	    				
    	    			})
						: null

					}

					
				</div>
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