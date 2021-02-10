import React from 'react';

class SelShelterOppsCard extends React.Component {

state = {
        clicked: false
    }

    clickedOppCard = () => {
        this.setState(previousState => {
            return {
                clicked: !previousState.clicked
            }
        })
    }

    handleYesClick = (opp) => {
        fetch('http://localhost:3000/user_opps',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify (
            {
                user_id: localStorage.user_id,
                opp_id: opp.id
            }
        )
        })
        .then(res => res.json())
        .then(userOpp => console.log(userOpp))
        console.log(localStorage.user_id)

    }

    render () {
      
        let frontCard = (
            <div className='shelter-opp-opps' onClick={(this.clickedOppCard)}>

                <div className='opp-title'>
                    Title: {this.props.opp.title}
                </div>

                <div className='opp-des'>
                    Description: {this.props.opp.des}
                </div>

                <div className='opp-date'>
                    Date: {this.props.opp.date}
                </div>

                <div className='opp-howlong'>
                    Length: {this.props.opp.howlong}Hr
                </div>
                <br></br>
            </div>
        )

        let backCard = (
            <div className='shelter-opp-opps' onClick={(this.clickedOppCard)}>
                <h5>Would you like to volunteer?</h5>
                {/* {console.log(this.props)} */}
                <div className='options'>
                    <button onClick={() => this.handleYesClick(this.props.opp)}>Yes</button>    
                    <button>No</button>   
                </div>
            </div>
        )

        return (
            !this.state.clicked? frontCard : backCard
        )

    }


}

export default SelShelterOppsCard