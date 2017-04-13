
import React from 'react';
import {Link} from 'react-router'

export var MovieData = (props) => {
	console.log("data is: ", props.movie)
	return(
			
			  <div className="col-sm-6 col-md-4">
			    <div className="thumbnail">
			      <img src={props.movie.Poster} className="img-responsive" />
			      <div className="caption">
			        <h3 className="text-center">{props.movie.Title}</h3>
			        <p> 
			        	<span className="text-left"> <i>Year : </i> {props.movie.Year} </span> 
			        	<span className="text-right"> <i>Type : </i> {props.movie.Type} </span>
			        </p>
			        
			        	
			        	<Link to={props.movie.imdbID} >
			        		<button className="btn btn-primary btn-lg btn-block">
			        			View More
			        		</button>
			        	</Link>			        
			      </div>
			    </div>
			  </div>
		

		)
}