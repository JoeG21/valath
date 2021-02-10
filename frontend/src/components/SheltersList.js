import React from 'react';
import Shelter from './Shelter'


const ShelterList = (props) => {

    return (
        <div className='list-shelters'>
            {props.shelters.map(shelter => <Shelter key={shelter.id} shelter={shelter} selShelter={props.selShelter} />)}
        </div>
    )
}

export default ShelterList