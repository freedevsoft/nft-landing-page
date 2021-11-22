import React from 'react';
import FrontKong from '../assets/images/front-kong.jpg';

const Front = () => {

    return (
      <div className="front-page">
            <div className="front-back-1"></div>
            <div className="front-back-2"></div>
            <div className="front-star-1"></div>
            <div className="front-star-2"></div>
            <div className="front-star-3"></div>
        <div className="grid-rect">
            <div className="top-left-rect"></div>
        </div>
        <div className="main-rect">
            <div className="sub-title"><span>Dexentric DAO</span></div>
            <div className="front-title"><span>the</span> <span>kong</span><span>loMer</span><span>ate</span></div>
            <div className="intro-panel">
                <img src={FrontKong} alt="kong" />
                <div className="info">
                    <p>A blockchain based comminty for collaborative resource management</p>
                    <button className="more-info">More Info</button>
                </div>
            </div>
            <div className="kucoin">
                <span className="comming-soon" >Comming Soon</span>
                <span className="community" >to Kucoin Community Chain</span> 
            </div>
        </div>
        <div className="tg-panel">Join our telegram community TE.me/Thekonglomerate  for UpDAtEs!!!</div>
      </div>  
    );
}

export default Front;