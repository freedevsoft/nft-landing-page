import React from 'react';
import partnerImg from '../assets/images/partner.jpg';

const Team = () => {

    return (
        <div className="d-flex flex-column">
            <span className="page-title">PROJECT TEAM AND STRUCTURE</span>
            <span className="font-gagalin font-size-54 font-color-magenta uppercase mx-2 mb-2 text-right">partners</span>
            <img className="w-75 m-auto" src={partnerImg} alt='img' />
            
            <span className="font-gagalin font-size-54 font-color-lightpurple uppercase my-2 mx-2 mb-2 text-right">core project team</span>
            <div style={{height: 400}}></div>
        </div>  
    );
}

export default Team;