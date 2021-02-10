import React from 'react';
import OppCard from './OppCard'


const OppsList = (props) => {

    return (
        <div className='opp-list'>
            {props.opps.map(opp => <OppCard key={opp.id} opp={opp} setUserOpps={props.setUserOpps} />)}
        </div>
    )
}

export default OppsList