import * as constant from '../constants/CommonConstants';

export function updateData(user){
	return {
		type: constant.UPDATE_DATA,
		user: user
	};
}

export function requestData(){
	return dispatch => {
		let url = 'https://my.oschina.net/gef';
		fetch(url)
			.then((response) =>{
				console.log("response:" + response);
				return response.text();
			})
			.then((responseText) => {
				console.log("responseText:" + responseText);
				if (responseText) {
					let user = {
						'name' : "葛夫锋",
						'age' : 18,
						'job' :'developer'
					};
					dispatch(updateData(user));
				}
			})
			.catch((error) => {
				console.log("error:" + error);
			});
	};

}