import React from 'react'

import {Switch, Route} from 'react-router-dom'

import JobListingDetail from './JobListingDetail'

import './ResearchDetailContainer.css'
import JobListingShowPage from './JobListingShowPage'

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

            <Switch>

                <Route exact path='/research' render= {() => {
                    return (<div className='ResearchDetailContainer'>
                                { this.state.listings.map( jl => <JobListingDetail key={jl.id} listing={jl}/> )}
                            </div>)
                }} />

            <Route exact path='/research/:id' render = { (props) =>  < JobListingShowPage listings={this.state.listings} id={props.match.params.id}/>} />


            </Switch>


            
        )
    }
}

export default ResearchDetailContainer;