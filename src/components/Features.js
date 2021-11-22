import React from 'react';
import RankingKong from '../assets/images/ranking-kong.png';

const Features = () => {

    return (
        <div className="d-flex flex-column">
            <span className="page-title">PROJECT FEATURES AND BENEFITS</span>
            <div className="d-flex flex-column my-2 mx-2">
                <div className="d-flex gap-10 justify-content-around align-item-center mb-2">
                    <div className="w-50">
                        <p className="feature-item-title">
                            Kongklomerate community membership:
                        </p>
                        <p className="feature-item-content">
                            Become a member of a dynamic and objective decentralized autonomous organization and benefit from collaborative resource management
                        </p>
                    </div>
                    <img src={RankingKong} alt="kong" />
                </div>
                <div className="d-flex gap-10 justify-content-around align-item-center mb-2">
                    <img src={RankingKong} alt="kong" />
                    <div className="w-50">
                        <p className="feature-item-title">
                            Passive income:
                        </p>
                        <p className="feature-item-content">
                            Owning a konglomarate avatar NFT automatically gives you part ownership of the proposed Konglectible NFT marketplace and its trading token, which will be airdropped to all konglomerate avatar minters at launch of the marketplace.
                        </p>
                    </div>
                </div>
                <div className="d-flex gap-10 justify-content-around align-item-center mb-2">
                    <div className="w-50">
                        <p className="feature-item-title">
                            Perpetual royalties:
                        </p>
                        <p className="feature-item-content">
                            If you decide to sell your NFTs, you will still earn perpetual royalties for every subsequent sale of that NFT as reward for being the original minter.
                        </p>
                    </div>
                    <img src={RankingKong} alt="kong" />
                </div>
                <div className="d-flex gap-10 justify-content-around align-item-center mb-2">
                    <img src={RankingKong} alt="kong" />
                    <div className="w-50">
                        <p className="feature-item-title">
                            MUCH MORE:
                        </p>
                        <p className="feature-item-content">
                            Automatic whitelisting on For APE IN  Launchpad presales, 
                        </p>
                    </div>
                </div>
                
            </div>
        </div>  
    );
}

export default Features;