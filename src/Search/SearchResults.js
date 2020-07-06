import React from 'react'
import Result from './Result'

class SearchResults extends React.Component {
    render(){
        return (
            <div>
                {this.props.results.map( r => <Result key={r.id} result={r} /> )}
            </div>
        )
    }
}

export default SearchResults