import React from 'react'

class Tag extends React.Component {

    render(){
        return(
            <div>
                {this.props.tag.name}
            </div>
        )
    }

}

export default Tag