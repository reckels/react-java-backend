import React from 'react';

class UserComponent extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick.bind(this);
	}

    
    handleClick = () => {
		this.props.refresh();
	}

    render(){
		const users = this.props.users;
        return(
            <div>
                <h1 className="text-center">Users List</h1>
                <button onClick={this.handleClick}>Get All</button>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <td>User Id</td>
                            <td>User First Name</td>
                            <td>User Last Name</td>
                            <td>User Email</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(
                                user =>
                                <tr key = {user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.firstName}</td>
                                    <td>{user.lastName}</td>
                                    <td>{user.email}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
                
            </div>
        );
    }
}

export default UserComponent;