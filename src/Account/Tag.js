import React from 'react'

class Tag extends React.Component {

    render(){
        console.log()
        return(
            <div>
                <ul>
                    <li>
                        {this.props.tag.tag_name}
                        <button onClick={this.props.handleClickDelete(this.props.tag)}>X</button>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Tag