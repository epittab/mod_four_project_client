import React from 'react'

// import './JobListingDetail.css'

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
                        Title: {listingInfo.job_title}
                        City: {listingInfo.city}
                        Company: {listingInfo.company}
                        Work hours: {listingInfo.contract_time}
                        Posted on: {listingInfo.created}
                        latitude: {listingInfo.latitude}
                        longitude: {listingInfo.longitude}
                        description: {listingInfo.description} 
                    </div>

                )
                    : null
            }
             
                
                {/* ps.l<a href = {this.proisting.job_url}><img src={extLink} style={{height: '1rem', width: '1rem'}} alt="external link icon" /></a> */}
                
                google maps api
            </div>
        )
    }
}

export default JobListingShowPage