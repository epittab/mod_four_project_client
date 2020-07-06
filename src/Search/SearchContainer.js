import React from 'react'
import SearchForm from './SearchForm'
import SearchResults from './SearchResults'

class SearchContainer extends React.Component {
    constructor(){
        super()
        this.state = {
            queryDetails: {
                query: "javascript%20developer",
                minSalary: "30000",
                resultsCount: "100",
                where: "20001", 
                sortBy: "salary",
                country: 'us'
            },
            results: []
        }
    }

    componentDidMount() {
        fetch(`https://api.adzuna.com/v1/api/jobs/${this.state.queryDetails.country}/search/1?app_id={Your_app_id}&app_key={Your_app_key}&results_per_page=${this.state.queryDetails.resultsCount}&what=${this.state.queryDetails.query}&where=${this.state.queryDetails.where}&distance=80&sort_by=${this.state.queryDetails.sortBy}&full_time=1`, {
            method: 'GET'
        })
        .then( r => r.json() )
        .then( data => {
            this.setState({results: data.results})
            return console.log(data)
        })
    }
    
    render(){
        return(
            <div>
                <SearchForm />
                <SearchResults results={this.state.results}/>
            </div>
        )
    }
}

export default SearchContainer;