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
                'Accept': 'application/json'
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
        let {name, value} = e.target
        this.setState({
            [name]: value
        })
    }


    render() {
        return(
            <div>
                <h2>Your Search Tag:</h2>
                    <div>
                        {/* {this.state.tags.map(tag => <Tag key={tag.id} tagObj={tag}/>)}  */}
                    </div>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Create New Tag: 
                            <input type="text"  
                                   placeholder="your new tag" 
                                   name="name"
                                   value={this.state.value || ""} 
                                   onChange={this.handleChange} 
                            />       
                        </label>
                        <button type="submit">Create</button>
                    </form>
                </div>

                
                <h2>Total No of Job Listings Saved:</h2>
                <hr/>
            </div>
        )
    }
}

export default UserInfo