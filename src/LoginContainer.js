import React from 'react'

import Register from './Register'
import Login from './Login'

import './LoginContainer.css'

class LoginContainer extends React.Component {

    constructor(){
        super()
        this.state ={
            form: {}
        }
    }

    handleChange = (e) => {
        let formObj = this.state.form
        formObj[e.target.name] = e.target.value
        this.setState({form: formObj})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        fetch('http://localhost:3001/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(this.state.form)
        })
        .then(r => r.json())
        .then(data => {
            this.setState({form: {}})
            return console.log(data)
        })
    }

    render() {
        return(
            <div className='LoginContainer'>

                { true ? < Register handleChange={this.handleChange} 
                            handleSubmit={this.handleSubmit}
                            form={this.state.form}/> 
                        : < Login handleChange={this.handleChange} 
                            handleSubmit={this.handleSubmit}
                            form={this.state.form}/> }

            </div>
        )

    }
}

export default LoginContainer;