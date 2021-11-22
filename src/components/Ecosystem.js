import React from 'react';
import ApeVille from '../assets/images/ape-ville.png';
import Avenue from '../assets/images/avenue.png';
import Konglomerate from '../assets/images/konglomerate.png';
import NewsAgents from '../assets/images/news-agents.png';
import StakeIsland from '../assets/images/stake-island.png';
import SwapStreet from '../assets/images/swap-street.png';

const Ecosystem = () => {

    return (
        <div className="d-flex flex-column">
            <span className="page-title">KONGLOMERATE ECOSYSTEM</span>
            <div className="ecosystem-img">
                <img src={ApeVille} alt="apeville" className="eco-name pos-ape-ville" />
                <img src={Avenue} alt="avenue" className="eco-name avenue" />
                <img src={Konglomerate} alt="konglomerate" className="eco-name konglomerate" />
                <img src={NewsAgents} alt="newsagents" className="eco-name news-agent" />
                <img src={StakeIsland} alt="stakeisland" className="eco-name stake-island" />
                <img src={SwapStreet} alt="swapstreet" className="eco-name swap-street" />
            </div>
        </div>  
    );
}

export default Ecosystem;