import React from 'react';
import ObjImg from '../assets/images/objective.png';
import stakingImg from '../assets/images/yield-staking.png';
import launchpadImg from '../assets/images/ape-launchpad.png';

const Objectives = () => {

    return (
        <div className="d-flex flex-column">
            <span className="page-title">PROJECT AIMS AND OBJECTIVES</span>
            <p className="font-opensans font-size-22 text-center w-75 m-auto">
                The aim of the Konglomerate community project is to implement a series of collectively owned and administered resources that will facilitate the scaling and efficiency of the ecosystem by rewarding activity and external contribution of members
            </p>
            <span className="font-gagalin font-size-54 font-color-lightpurple uppercase my-2 text-center">KONGLECTIBLE: NFTs MARKETPLACE</span>
            <img className="w-75 m-auto" src={ObjImg} alt='img' />
            <p className="font-opensans font-size-22 mx-4 text-center">
                Konglectible NFTs Marketplace is the first proposed resource of the Konglommerate and will be instantiated by the community using the funds raised from both sales of the Kukong avatars and also potential grants from the KCC grants program. The aim is to build and deploy a highly competitive and rewards oriented NFT trading and minting platform with its own transactional token ($KKMT), that enables management of users’ Non-fungible tokens and also provides passive income for owners of Konglomerate collectibles using income generated from trading and transaction fees earned on the platform.The aim of the Konglomerate community project is to implement a series of collectively owned and administered resources that will facilitate the scaling and efficiency of the ecosystem by rewarding activity and external contribution of members
            </p>
            <span className="page-title">BOOSTED YEILD STAKING</span>
            <img className="w-75 m-auto my-2" src={stakingImg} alt='img' />
            <p className="font-opensans font-size-22 mx-4 text-center">
                The Konglomerate Staking protocol consists of a staking smart contrant and a graphical user interface that enables holders of the community ERC20 standard token ($KKCT) to earn passive income by staking their dormant coins on the konglomerate staking platform. The staking protocol rewards stakers according to the total value locked (TVL) by each staker. Owners of Konglomerate avatars will enjoy boosted yields upto 2% extra APR when they stake their $KKCT on the platform.
            </p>
            <span className="page-title">APE IN LAUNCHPAD</span>
            <img className="w-75 m-auto my-2" src={launchpadImg} alt='img' />
            <p className="font-opensans font-size-22 mx-4 text-center"> 
                The ape in Launch pad is a blockchain startup development platform that seeks to facilitate development and deployment of new gaming projects on the KCC network, by providing an effective platform that assists them with both technical advise and  access to a community of crypto enthusiasts for easier fund raising. wallet addresses that hold  Konglomerate avatar NFTs will be automatically whitelisted to participate in the presales for all new projects that will be launched on our platform.
            </p>
        </div>  
    );
}

export default Objectives;