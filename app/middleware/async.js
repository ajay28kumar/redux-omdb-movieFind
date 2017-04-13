export default function({dispatch}){
	return next => action => {
		// Ig action doesn't have payload or, the payload does't have a .then props
		//we don't care here bcoz it don't have a promise
		if(!action.payload || !action.payload.then){
			return next(action);
		}

		//Make sure the action's promise resolves

		action.payload
			.then(function (response){

				const newAction = {
					...action, 
					payload : response
				}
				console.log("response is: ", newAction)

				dispatch (newAction);

			});


		console.log("I have a promise", action)
	};
};

