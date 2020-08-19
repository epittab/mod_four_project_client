import React from 'react'

import UserInfo from './UserInfo'
import UserAccount from './UserAccount'

import './UserInfoContainer.css'

class UserInfoContainer extends React.Component {

    componentDidMount(){
        this.props.getTags()
    }
    
    render(){
        return(
            <div className="user-info-container">
                <div className="user-info-wrapper">
                    <UserInfo tags={this.props.tags} 
                                            handleClickDelete={this.props.handleClickDelete}
                                            addTag={this.props.addTag}
                                            /> 
                    <UserAccount />
                </div>
            </div>
        )
    }
}

export default UserInfoContainer