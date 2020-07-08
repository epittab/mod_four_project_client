import React, { Component } from 'react'

import Tag from './Tag'

class UserInfo extends Component {

    constructor() {
        super()
        this.state = {
            tags: [],
            value: "",
            user_id: 0
        }
    }

    componentDidMount(id) {
        fetch("http://localhost:3001/", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Accept': "application/json",
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(r => r.json())
        .then(data => {
            this.setState({tags: data})
            console.log(data)
        })
    }
 
    handleSubmit = (e) => {
        e.preventDefault()
        let {value, user_id} = this.state
 
        fetch("http://localhost:3001/tag", {
            method: "POST",
            header: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': localStorage.getItem('token')
            },
            body: JSON.stringify({
                tag_name: value
            })
        })
        .then(r => r.json())
        .then(data => {
            this.setState({value: ""})
            return console.log(data)
        })
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
                        {this.state.tags.map(tag => < Tag key={tag.id} tag={tag}/>)}
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