import React from 'react';
import twitter from '../assets/images/twitter.png';
import discord from '../assets/images/discord.png';
import reddit from '../assets/images/reddit.png';

const ContactUs = () => {

    return (
        <div className="d-flex flex-column">
            <span className="page-title">contact us</span>
            <div className="d-flex justify-content-center gap-4 my-2" >
                <a>
                    <img className="contact-img" src={twitter} alt="twitter" />
                </a>
                <a>
                    <img className="contact-img" src={discord} alt="discord" />
                </a>
                <a>
                    <img className="contact-img" src={reddit} alt="reddit" />
                </a>
            </div>
            <div style={{height: 400}}></div>
        </div>  
    );
}

export default ContactUs;