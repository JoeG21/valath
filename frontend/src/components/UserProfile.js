import React, { Component } from 'react';
import OppCard from './OppCard'

class UserProfile extends Component {

    state = {
        user: this.props.user,
        userOpps: []
    }


    componentDidMount () {

        console.log(this.props.userOpps)
        // fetch(`http://localhost:3000/users/${this.props.user.id}`,
        // {
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Auth-Key': localStorage.getItem('auth_key')
        //     }
        // })
        // .then(res => res.json())
        // .then(user_opps => console.log(user_opps))
        // .then(userOpps => this.setState({
        //     userOpps: userOpps
        // }))
    }

    // componentDidUpdate () {
    //     // debugger
    // }



    render() {
        return (
            <div className='user-profile'>
                <h1>{this.props.user.first_name} {this.props.user.last_name}</h1>
                <h2>Username: {this.props.user.username}</h2>
                {this.props.userOpps.map(opp => <OppCard opp={opp} />)}
                {/* <li>{this.state.userOpps.map(opp => console.log(opp))}</li> */}
                {/* <OppsList opps={this.state.user_opps} /> */}
            </div>
        )
    }
}

export default UserProfile;