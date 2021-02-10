import React from 'react';

const Shelter = (props) => (
  <div className='shelter'>
    <ul onClick={() => props.selShelter(props.shelter)}>
      <h2>{props.shelter.name}</h2>
    </ul>
  </div>
);

export default Shelter;