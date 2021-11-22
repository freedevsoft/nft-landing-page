import React from 'react';
import WelcomeKong from '../assets/images/welcome-kong.jpg';
import FairKong from '../assets/images/fair-kong.jpg';

const Welcome = () => {

    return (
        <div className="front-page">
            <div className="d-flex gap-4">
                <div className="text-center">
                    <h1 className="welcome-title uppercase">welcome to the konglomerate</h1>
                    <p className="welcome-desc uppercase">The Konglomerate NFTs are a collection of 10,000 unique collectible kong avatar characters with original art created by various professional sketch artists and graphics designers, deployed on the Kucoin Community Chain (KCC) network. Ownership of a Konglomerate avatar nft serves as membership pass into the konglomerate community, and entitles the owner to a percentage of all community owned resources, which will include the  KONGLECTIBLE Marketplace --a highly competitive and incentive driven collectible art NFT marketplace, as well as a host of future planned community owned income generating infrastructure.</p>
                </div>
                <img className="max-400" src={WelcomeKong} alt='kong' />
            </div>  
            <div className="d-flex gap-4 mt-2">
                <img className="max-400" src={FairKong} alt='kong' />
                <div className="text-center">
                    <h1 className="faire-title uppercase" >FAIR CHANCE FOR EVERYONE</h1>
                    <p className="welcome-desc uppercase">All the kong avatars are stored as ERC721 standard tokens on the KCC network and have their metadata hosted on the IPFS server. The mint price for each avatar is set at 12.5 kcs, and there is a maximum mint amount of 100 NFTs per wallet and a further limit of 20 NFTs per transaction. Each mint transaction provides the minter with a fair chance of minting the highest ranking avatars due to the use of a chain Link enabled randomizer, which uses a verifiably random number to determine the token ID to be issued to the minter. </p>
                    <p className="note">
                    <span className="text-red">NOTE:</span> 455 tokens were selected at random and have been reserved for seed funders, testers promotions and strategic partners.
                    </p>
                </div>
            </div>  
            <div className="d-flex gap-4 mt-2">
                <div className="text-center">
                    <h1 className="launch-title uppercase max-400" >Launching In</h1>
                    <button className="join-now">Join now</button>
                </div>
                <div id="clock">
                    <span>10:20</span>
                </div>
            </div>  
        </div>  
    );
}

export default Welcome;