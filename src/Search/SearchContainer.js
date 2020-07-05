import React from 'react'
import SearchForm from './SearchForm'
import SearchResults from './SearchResults'

class SearchContainer extends React.Component {
    
    render(){
        return(
            <div>
                <SearchForm />
                <SearchResults />
            </div>
        )
    }
}

export default SearchContainer;