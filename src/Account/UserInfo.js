import React, { Component } from 'react'

class UserInfo extends Component {

    constructor() {
        super()
        this.state = {
            tags: [],
            value: "",
            user_id: 0
        }
    }

    // componentDidMount() {
    //     fetch("http://localhost:3001/")
    //     .then(r => r.json())
    //     .then(console.log())
    //     // this.setState({tags:""})
    // }

    handleSubmit = (e) => {
        e.preventDefault()
        let {value, user_id} = this.state

        fetch("http://localhost:3001/tag", {
            method: "POST",
            header: {
                'Content-Type':'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                value: value,
                // user_id: user_id,
            })
        })
        .then(r => r.json())
        .then(data => {
            this.setState({value:""})
            
        }
        
    }

    handleChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }

    render() {
        return(
            <div>
                <h2>Your Search Tag:</h2>
                    <div>
                        <h4>Tag</h4>
                        <h4>Tag</h4>
                        <h4>Tag</h4>
                        <h4>Tag</h4>
                    </div>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Create New Tag: 
                            <input type="text"  
                                   placeholder="your new tag" 
                                   value={this.state.value} 
                                   onChange={this.handleChange} 
                            />       
                        </label>
                    </form>
                </div>

                <button>Create</button>
                <h2>Total No of Job Listings Saved:</h2>
                <hr/>
                <h3>Your Account:</h3>
                <button>Edit</button>
                <button>Delete</button>
            </div>
        )
    }
}

export default UserInfo