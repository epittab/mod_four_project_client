import React from 'react'
import MapContainer from './MapContainer'

import './ShowPage.css'

class JobListingShowPage extends React.Component {

    componentDidMount() {
        //use the id in the url to fetch and load data
         //on the back end find and return data for listing_id == 4
    }
    render(){
        let listingInfo = this.props.listings.find( (l) => l.id == this.props.id)
        console.log(listingInfo)
        return(
            <div className='JobListingDetail'>
                
               { listingInfo ? 
                (
                    <div>
                    <div className='JobInfo'>
                        <div className='JobTitle'><h4>Title:</h4> {listingInfo.job_title}</div>
                        <div className='JobTitle'><h4>Company:</h4> {listingInfo.company}</div>
                        <div className='JobTitle'><h4>City:</h4> {listingInfo.city}</div>
                        <div className='JobTitle'><h4>State:</h4> {listingInfo.state}</div>
                        <div className='JobTitle'><h4>Work hours:</h4> {listingInfo.contract_time}</div>
                        <div className='JobTitle'><h4>Posted on:</h4> {listingInfo.created_at}</div>
                        {/* <div className='JobTitle'><h4>Latitude:</h4> {listingInfo.latitude}</div>
                        <div className='JobTitle'><h4>Longitude:</h4>{listingInfo.longitude}</div> */}
                        <div className='JobTitle'><h4>Description:</h4> {listingInfo.snippet}</div> 
                    </div>

                    
                    <div> google maps api </div><br></br>

                        <div style={{height: '500px', width: '500px'}}>
                            <MapContainer style={{height: '500px', width: '500px'}} location={{lat: listingInfo.latitude, lng: listingInfo.longitude}} />
                        </div>
                    </div>              
                )
                    : null
            }
             
                
                {/* ps.l<a href = {this.proisting.job_url}><img src={extLink} style={{height: '1rem', width: '1rem'}} alt="external link icon" /></a> */}
                
                
            </div>
        )
    }
}

export default JobListingShowPage