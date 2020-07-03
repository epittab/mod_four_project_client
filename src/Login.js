import React from 'react'


class Login extends React.Component {


    render(){
        return(
            <div>
                <form onSubmit={this.props.handleLoginSubmit}>
                    <label>
                        <input type='' onChange={this.props.handleLoginChange}/>
                    </label>
                    <label>
                        <input type='' onChange={this.props.handleLoginChange}/>
                    </label>
                    <button type='submit'></button>
                </form>
            </div>
        )
    }
}

export default Login;