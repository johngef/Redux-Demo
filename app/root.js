import React from 'react';
import {View,StyleSheet,Text} from 'react-native';
import {connect} from 'react-redux';
import {requestData,updateData2} from './actions/userAction';

class Root extends React.Component{
	render(){
		let {flag,user} = this.props;
		//flag
		let content = null;
		if(flag == 1){
			content = (<Text>加载中</Text>);
		}else{
			content = (<Text>加载成功</Text>);
		}
		//user
		let userView = null;
		if (user) {
			userView = (<View style = {style.userView}>
				<Text>姓名：{user.name}</Text>
				<Text>年龄：{user.age}</Text>
				<Text>工作：{user.job}</Text>
			</View>);
		}

		return (
			<View style = {style.container}>
				{content}
				{userView}
			</View>
		);
	}
	componentDidMount(){
		let {updateData} = this.props;
		updateData();
	}
}
const style = StyleSheet.create({
	container:{
		flex: 1,
		alignItems: 'center',
		justifyContent:'center',
		backgroundColor: '#FF6A6A'
	},
	userView:{
		marginTop:10
	}
});

function mapStateToProps(state){
	return {
		flag:state.UserReducer.flag,
		user:state.UserReducer.user
	};
}
function mapDispatchToProps(dispatch){
	return {
		updateData:function(){
			dispatch(requestData());
		}
	};
}
export default connect(mapStateToProps,mapDispatchToProps)(Root);