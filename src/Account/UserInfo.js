import React, { Component } from 'react'

class UserInfo extends Component {
    render(){
        return(
            <div>
                <h2>Total Searches</h2>
                <h2>Highest Valued Job</h2>
                <h2>Average Job</h2>
                <hr/>
                <h3>Your Account:</h3>
                <button>Edit</button>
                <button>Delete</button>
            </div>
        )
    }
}

export default UserInfo