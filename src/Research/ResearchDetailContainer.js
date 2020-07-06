import React from 'react'

import JobListingDetail from './JobListingDetail'

import './ResearchDetailContainer.css'

class ResearchDetailContainer extends React.Component {

    constructor() {
        super()
        this.state = {
            listings: []
        }
    }

    componentDidMount () {
        fetch(`http://localhost:3001/listing`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': "application/json",
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(r => r.json())
        .then( data => {
            this.setState({listings: data})
            console.log(data)
        })
    }

    render(){
        return(
            <div className='ResearchDetailContainer'>
                
                { this.state.listings.map( jl => <JobListingDetail key={jl.id} listing={jl}/>)}
                
            </div>
        )
    }
}

export default ResearchDetailContainer;