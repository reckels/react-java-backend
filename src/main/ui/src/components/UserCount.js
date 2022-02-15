import React from 'react';

class UserCount extends React.Component {
    
    render(){
		const users = this.props.users;
        return(
            <div>
                <h2>Users Created: {users.length}</h2>
            </div>
        );
    }
}

export default UserCount;