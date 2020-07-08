import React, { Component } from 'react'
import Tag from './Tag'


class UserInfo extends Component {

    constructor() {
        super()
        this.state = {
            tags: [],
            tag: "",
            user_id: 0
        }
    }

    componentDidMount() {
        fetch("http://localhost:3001/tags", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Accept': "application/json",
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(r => r.json())
        .then(tag_array => {
            this.setState({tags: tag_array})
            console.log(tag_array)
        })
    }
 
    handleSubmit = (e) => {
        e.preventDefault()
        let {tag} = this.state
 
        fetch("http://localhost:3001/tags", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': localStorage.getItem('token')
            },
            body: JSON.stringify({
                tag_name: tag
            })
        })
        .then(r => r.json())
        .then(data => {
            this.setState({tag: ""})
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
                        {/* {this.state.tags.map(tag => < Tag key={tag.id} tag={tag}/>)} */}
                    </div>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Create New Tag: 
                            <input type="text"  
                                   placeholder="your new tag" 
                                   name="tag"
                                   value={this.state.tag} 
                                   onChange={this.handleChange} 
                            />       
                        </label>
                        <button type="submit">Create Tag</button>
                    </form>
                </div>

                
                <h2>Total No of Job Listings Saved:</h2>
                <hr/>
            </div>
        )
    }
}

export default UserInfo