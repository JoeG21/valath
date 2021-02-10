import React from 'react';
import _Logo from '../_Logo.mp4'

const Welcome = () => {
    return (
      <div className='welcome-page'>
        <video autoPlay muted loop src={_Logo} type="video/mp4" />
        <div className='bio'>
          <p>
            Valath is a place where you can find nearby volunteering opportunities in the Houston area.
          </p>
          <p className='bio-second'>
            But Valath is more than this, it’s all about bringing everyone in your commutiy closer. By signing up you’re making a promise. 
          </p>
          <p className='bio-third'>
            A promise to not let our values tarnish and holding our oaths accountable.
          </p>
        </div>
      </div>
    );
}

export default Welcome