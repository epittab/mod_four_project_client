import React from 'react'

import {Link, Route} from 'react-router-dom' 
import extLink from '../images/external-link.svg'

import './JobListingDetail.css'
import JobListingShowPage from './JobListingShowPage'

class JobListingDetail extends React.Component {

    // showListing = () => {

    // }

    render(){
      
        return(
            <div className='JobListingDetail' >
                <Link to ={`research/${this.props.listing.id}`} >Title: {this.props.listing.job_title} </Link>
                , City: {this.props.listing.city}
                , Company: {this.props.listing.company}
                <a href = {this.props.listing.job_url}><img src={extLink} style={{height: '1rem', width: '1rem'}} alt="external link icon" /></a>
              
                <Route exact path='research/:id' render={() => <JobListingShowPage listing={this.props.listing}/>} />

            </div>
        )
    }
}

export default JobListingDetail