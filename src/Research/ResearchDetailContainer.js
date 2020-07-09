import React from 'react'

import {Switch, Route} from 'react-router-dom'
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  } from 'recharts';

import JobListingDetail from './JobListingDetail'

import './ResearchDetailContainer.css'
import JobListingShowPage from './JobListingShowPage'



class ResearchDetailContainer extends React.Component {

    constructor() {
        super()
        this.state = {
            listings: [],
            showingGraph: false
        }
    }

    componentDidMount () {
        fetch(`http://localhost:3001/listing`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': "application/json",
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(r => r.json())
        .then( data => {
            this.setState({listings: data})
            console.log(data)
        })
    }

    handleToggleGraph = () => {
        this.setState({showingGraph: !this.state.showingGraph})
    }

    cleanListingsData() {
        let listingObj = {}

        this.state.listings.forEach(l => {

            if (listingObj[l.city])
               { listingObj[l.city] += 1}
            else
               { listingObj[l.city] = 1}


        })

        let list_array = Object.entries(listingObj).map( l => {
            return {city: l[0], count: l[1] }
        } )

        return list_array
    }
    
    cleanTagData() {
        let tempObj = {}
        this.state.listings.forEach(l => {
            let textArray = l.snippet.toLowerCase().split(" ")
            this.props.tags.forEach(tag => {
                let filteredArray = textArray.filter(text => tag.tag_name.toLowerCase() === text )
                if (tempObj[tag.tag_name]){
                    tempObj[tag.tag_name] += filteredArray.length
                } else {
                tempObj[tag.tag_name] = filteredArray.length
                }
            })
        })

         let tag_array = Object.entries(tempObj).map( t => {
            return {tag: t[0], count: t[1] }
        } )
        return tag_array
    }

    render(){

        let listingsData = this.cleanListingsData()
        let tagsData = this.cleanTagData()

        console.log(tagsData)
        return(

            <Switch>

                <Route exact path='/research' render= {() => {
                    return (

                        <div>

                            <div className='Research-toggle-button'>
                                <div className={`toggle-button ${ this.state.showingGraph ? '' : 'active'}`} onClick={this.handleToggleGraph}>List</div>
                                <div className={`toggle-button ${ this.state.showingGraph ? 'active' : ''}`} onClick={this.handleToggleGraph}>Graph</div>
                            </div>
                        
                            {this.state.showingGraph ? 
                            
                            <div className='ResearchDetailContainer'>
                                <BarChart
                                    width={500}
                                    height={300}
                                    data={listingsData}
                                    margin={{
                                    top: 5, right: 30, left: 20, bottom: 5,
                                    }}
                                >
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="city" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Bar dataKey="count" fill="#8884d8" />
                                    
                                </BarChart>

                                <BarChart
                                    width={500}
                                    height={300}
                                    data={tagsData}
                                    margin={{
                                    top: 5, right: 30, left: 20, bottom: 5,
                                    }}
                                >
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="tag" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Bar dataKey="count" fill="#8884d8" />
                                    
                                </BarChart>

                            </div>
                            
                            :

                             <div className='ResearchDetailContainer'>
                                { this.state.listings.map( jl => <JobListingDetail key={jl.id} listing={jl}/> )}
                            </div>
                            }
                        
                        
                        
                        </div>
                        
                    
                           
                            
                            )
                }} />

            <Route exact path='/research/:id' render = { (props) =>  < JobListingShowPage listings={this.state.listings} id={props.match.params.id}/>} />


            </Switch>


            
        )
    }
}

export default ResearchDetailContainer;