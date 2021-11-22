import React from 'react';
import RankingKong from '../assets/images/ranking-kong.png';
import RankImg from '../assets/images/rank-img.png';

const Ranking = () => {

    return (
        <div className="d-flex flex-column">
            <span className="page-title">AVATAR DISTRIBUTION AND RANKING</span>
            <div className="d-flex gap-4 mt-2 mx-2 align-items-center">
                <div className="text-center">
                    <p className="font-gagalin font-size-54 font-color-purple uppercase my-2" >FAIR CHANCE FOR EVERYONE</p>
                    <p className="font-opensans font-size-22 text-center">
                        The Konglomerate avatar images aim to implement an abstraction of the notion of community, using gorilla like characters to represent stakeholders in the ecosystem or community. The collection also seeks to represent the diverse nature of the community with an attempt to further represent the statistical distribution of these various stakeholders by adopting an initial estimate for the population of each category based on the perceived actual distribution of the abstract notion of the ecosystem’s population, which it seeks to represent.
                        The kongs are classed into 4 different categories that represent various notions of interests and character of stakeholders. The kong categories according to their ranks include:
                    </p>
                </div>
                <img className="max-400" src={RankingKong} alt='kong' />
            </div>
            <span className="font-gagalin font-size-68 font-color-darkblue uppercase my-2 text-center">AVATAR CLASSES AND DISTRIBUTION</span>
            <div className="ml-auto d-flex mx-2">
                <div className="ranking-img ml-auto">
                    <img className="img-box bounce-ranking-img" src={RankImg} alt='img' /> 
                </div>
            </div> 
        </div>  
    );
}

export default Ranking;