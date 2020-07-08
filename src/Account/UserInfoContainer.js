import React from 'react'

import UserInfo from './UserInfo'
import UserAccount from './UserAccount'

import './UserInfoContainer.css'

class UserInfoContainer extends React.Component {
    render(){
        return(
            <div className="user-info-container">
                <UserInfo tags={this.props.tags} 
                          handleClickDelete={this.props.handleClickDelete}
                          addTag={this.props.addTag}
                          /> 
                <UserAccount />
            </div>
        )
    }
}

export default UserInfoContainer