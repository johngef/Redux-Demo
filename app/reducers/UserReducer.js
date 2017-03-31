import * as constant from '../constants/CommonConstants'

const initState = {
	flag:1, //1请求中 2请求成功
	user: null
}

export default function addUser(state = initState,action){
	switch(action.type){
		case constant.LOAD_USER:
			return Object.assign({},state,{flag : 1});
		case constant.UPDATE_DATA:
			return Object.assign({},state,{flag : 2, user : action.user});
		default:
			return state;
	}

}