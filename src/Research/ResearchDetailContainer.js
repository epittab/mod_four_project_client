import React from 'react'

import ResearchDetail from './ResearchDetail'
import ResearchDetailHeader from './ResearchDetailHeader'

class ResearchDetailContainer extends React.Component {
    render(){
        return(
            <div>
                <ResearchDetailHeader />
                <ResearchDetail />
            </div>
        )
    }
}

export default ResearchDetailContainer;