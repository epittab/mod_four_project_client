import React from 'react'

// import './JobListingDetail.css'

class JobListingShowPage extends React.Component {

    componentDidMount() {
        //use the id in the url to fetch and load data
         //on the back end find and return data for listing_id == 4
    }
    render(){
        return(
            <div className='JobListingDetail'>
                {/* Title: {this.props.listing.job_title}
                City: {this.props.listing.city}
                Company: {this.props.listing.company}
                Work hours: {this.props.listing.contract_time}
                Posted on: {this.props.listing.created}
                latitude: {this.props.listing.latitude}
                longitude: {this.props.listing.longitude}
                description: {this.props.listing.description} */}
                {/* ps.l<a href = {this.proisting.job_url}><img src={extLink} style={{height: '1rem', width: '1rem'}} alt="external link icon" /></a> */}
                
                google maps api
            </div>
        )
    }
}

export default JobListingShowPage