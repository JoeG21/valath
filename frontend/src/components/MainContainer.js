import React, { Component } from 'react';
import SideBar from './SideBar'
import Content from './Content'

class MainContainer extends Component {

    state = {
        opps: [],
        shelters: [],
        userOpps: [],
        selShelter: null,
        selShelterOpps: []
    }

    componentDidMount () {
        this.getShelters()
        this.getOpps()
    } 
 
   getShelters = () => {
        fetch('http://localhost:3000/shelters')
        .then(res => res.json())
        .then(shelters => this.setState({
            ...this.state,
            shelters: shelters
        }))
    }

    getOpps = () => {
        fetch('http://localhost:3000/opps')
        .then(res => res.json())
        .then(opps=> this.setState({
            ...this.state,
            opps: opps
        }))
    }

    selShelter = (shelter) => {
        let findOpp = []
        this.state.opps.map(opp => { 
            if (opp.shelter_id === shelter.id) {
                findOpp.push(opp)
                console.log(findOpp)
            }
        })

        this.setState({
            selShelter: shelter,
            selShelterOpps: findOpp
        })
    }

    // selShelterOpps = () => {
    //     fetch
    // }
 
    render() {
        return (
            <div className='main-container'>
                <div className='sidebar-com'>
                    <SideBar shelters={this.state.shelters} selShelter={this.selShelter} />
                </div>
                <div className='content-com'>
                    <Content selShelter={this.state.selShelter} selShelterOpps={this.state.selShelterOpps} opps={this.state.opps} setUserOpps={this.props.setUserOpps} />
                </div>
            </div>
        )
    }
}

export default MainContainer