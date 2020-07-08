import React from 'react'

class Tag extends React.Component {

    render(){
        
        return(
            <div className='Tag'>
                {this.props.tag.tag_name}
                <button onClick={() => this.props.handleClickDelete(this.props.tag)}>X</button>      
            </div>
        )
    }
}

export default Tag