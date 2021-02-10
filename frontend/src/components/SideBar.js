import React from 'react';
import SheltersList from './SheltersList'


const SideBar = (props) => {

    return (
        <div className='side-bar'>
            <SheltersList shelters={props.shelters} selShelter={props.selShelter} />
        </div>
    )
}

export default SideBar