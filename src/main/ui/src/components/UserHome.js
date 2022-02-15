import React from 'react';
import UserComponent from './UserComponent';
import AddUser from './AddUser';
import UserService from '../services/UserService';
import UserCount from './UserCount';

class UserHome extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			users: []
		};
	}
	
	componentDidMount(){
        UserService.getUsers().then((response) => {
            this.setState({users: response.data})
        });
    }
    
    refreshUsers = () => {
		UserService.getUsers().then((response) => {
			this.setState({users: response.data})
		});
	}
	
	render(){
		return(
			<div>
				<AddUser/>
				<UserCount users={this.state.users}/>
				<UserComponent users={this.state.users} refresh={this.refreshUsers}/>
			</div>
		)
	}
}

export default UserHome;