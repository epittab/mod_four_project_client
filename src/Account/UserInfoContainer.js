import React from 'react'

import UserInfo from './UserInfo'
import UserAccount from './UserAccount'

class UserInfoContainer extends React.Component {
    render(){
        return(
            <div>
                <UserInfo />
                <UserAccount />
            </div>
        )
    }
}

export default UserInfoContainer