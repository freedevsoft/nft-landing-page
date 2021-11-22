import React from 'react';
import FrontKong from '../assets/images/front-kong.jpg';
import twitter from '../assets/images/twitter.png';
import discord from '../assets/images/discord.png';
import reddit from '../assets/images/reddit.png';

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
            <div className="sub-title d-flex gap-4 justify-content-end align-item-center">
                <a>
                    <img className="contact-img-small" src={twitter} alt="twitter" />
                </a>
                <a>
                    <img className="contact-img-small" src={discord} alt="discord" />
                </a>
                <a>
                    <img className="contact-img-small" src={reddit} alt="reddit" />
                </a>
            </div>
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