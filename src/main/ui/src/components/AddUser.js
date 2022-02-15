import React from 'react';
import UserService from '../services/UserService';
import UserCount from './UserCount';

class AddUser extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			firstName: '',
			lastName: '',
			email: ''
		}
	}
	
	handleFirstNameChanged(event){
		var firstName = this.state.firstName;
		firstName = event.target.value;
		
		this.setState({firstName: firstName});
	}
	
	handleLastNameChanged(event){
		var lastName = this.state.lastName;
		lastName = event.target.value;
		
		this.setState({lastName: lastName});
	}
	
	handleEmailChanged(event){
		var email = this.state.email;
		email = event.target.value;
		
		this.setState({email: email});
	}
	
	
	render(){
		return(
			<div>
				<div className="user-input">
					<input type="text" onChange={this.handleFirstNameChanged.bind(this)} placeholder="First Name"></input>
					<input type="text" onChange={this.handleLastNameChanged.bind(this)} placeholder="Last Name"></input>
					<input type="text" onChange={this.handleEmailChanged.bind(this)} placeholder="Email"></input>
					<button onClick={this.handleClick}>Add User</button>
				</div>
			</div>
		);
	}
	
	handleClick = () => {
		console.log(this.state.firstName);
		const firstName = this.state.firstName;
		const lastName = this.state.lastName;
		const email = this.state.email;
		UserService.addUser(firstName, lastName, email);
		UserService.getUsers();
		this.setState({
			firstName: '',
			lastName: '',
			email: ''
		})
		let inputs = document.querySelectorAll("input");
		inputs.forEach((input) => (input.value = ""));
	}
	
}

export default AddUser;