import React from 'react';
import SelShelterOppsCard from './SelShelterOppsCard'

const ShelterCard = (props) => {
    return(
        <div className='shelter-card'>

            <div >
                <img src={props.selShelter.img} className='card-img'/>
            </div>

            <div className='shelter-opp-name'>
                <h3>{props.selShelter.name}</h3>
            </div>

            <div className='shelter-opp-location'>
                <h4>Address: {props.selShelter.location}</h4>
            </div>

            <div className='shelter-opp-phone'>
                <h5>Phone: {props.selShelter.phone}</h5>
            </div>

            <div className='shelter-opps'>
                {props.selShelterOpps.map(opp => <SelShelterOppsCard key={opp.id} opp={opp} />)}
            </div>
        </div>
    )
};

export default ShelterCard;