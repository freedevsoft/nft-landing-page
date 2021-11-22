import React, { useEffect, useRef, useState } from 'react';
import ReactEcharts from "echarts-for-react";

const Tokenomics = () => {
    const optionA = {
        color: ['rgb(49, 53, 110)', 'rgb(47, 95, 152)', 'rgb(45, 139, 186)', 'rgb(65, 184, 213)', 'rgb(108, 229, 232)', 'rgb(65, 184, 213)', 'rgb(45, 139, 186)', 'rgb(47, 95, 152)', 'rgb(49, 53, 110)', 'rgb(112, 78, 133)', 'rgb(166, 108, 152)'],
        tooltip: {
            trigger: 'item',
            formatter: '{b}: {d}%'
        },
        series: [
            {
                type: 'pie',
                radius: ['30%', '60%'],
                labelLine: {
                    length: 50
                },
                label: {
                    formatter: '  {b|{b}\n{d}% }  ',
                    backgroundColor: 'rgba(0,0,0,0)',
                    rich: {
                    a: {
                        color: '#6E7079',
                        lineHeight: 22,
                        align: 'center'
                    },
                    b: {
                        color: '#ffffff',
                        fontSize: 24,
                        align: 'center'
                    },
                    per: {
                        color: '#fff',
                        backgroundColor: '#4C5058',
                        padding: [3, 4],
                        borderRadius: 4
                    }
                    }
                },
                data: [
                    { value: 5, name: 'Foundation' },
                    { value: 12.5, name: 'Marketing' },
                    { value: 5, name: 'Admin' },
                    { value: 12.5, name: 'Reserve' },
                    { value: 5, name: 'Graphic Artists' },
                    { value: 10, name: 'Developers' },
                    { value: 50, name: 'Token Liquidity' }
                ]
            }
        ]
    };
    const optionB = {
        color: ['rgb(49, 53, 110)', 'rgb(47, 95, 152)', 'rgb(45, 139, 186)', 'rgb(65, 184, 213)', 'rgb(108, 229, 232)', 'rgb(65, 184, 213)', 'rgb(45, 139, 186)', 'rgb(47, 95, 152)', 'rgb(49, 53, 110)', 'rgb(112, 78, 133)', 'rgb(166, 108, 152)'],
        tooltip: {
            trigger: 'item',
            formatter: '{b}: {d}%'
        },
        series: [
            {
                type: 'pie',
                radius: ['30%', '60%'],
                labelLine: {
                    length: 30
                },
                label: {
                    formatter: '  {b|{b}\n{d}% }  ',
                    backgroundColor: 'rgba(0,0,0,0)',
                    rich: {
                    a: {
                        color: '#6E7079',
                        lineHeight: 22,
                        align: 'center'
                    },
                    b: {
                        color: '#ffffff',
                        fontSize: 24,
                        lineHeight: 34,
                        align: 'center'
                    },
                    per: {
                        color: '#fff',
                        backgroundColor: '#4C5058',
                        padding: [3, 4],
                        borderRadius: 4
                    }
                    }
                },
                data: [
                    { value: 2.5, name: 'Dexentric DAO' },
                    { value: 7.5, name: 'Graphic artists' },
                    { value: 10, name: 'Developers' },
                    { value: 25, name: 'Staking Contract' },
                    { value: 5, name: 'IDO sale' },
                    { value: 10, name: 'Kuswap LP' },
                    { value: 5, name: 'Admin' },
                    { value: 10, name: 'kucoin kongs owners airdrop' },
                    { value: 10, name: 'Marketing' },
                    { value: 5, name: 'community reserve' },
                    { value: 10, name: 'partnerships' }
                ]
            }
        ]
    };
    return (
        <div className="d-flex flex-column">
            <span className="page-title">tokenomics</span>
            <span className="font-gagalin font-size-42 font-color-magenta uppercase mb-2 w-50 mx-4">Kucoin Kongs avatar sales distribution</span>
            <ReactEcharts
                option={optionA}
                style={{
                    height: 800
                }}
            />
            <span className="font-gagalin font-size-42 font-color-magenta uppercase mb-2 w-75 mx-4">Proposed Konglectible Marketplace Token Distribution</span>
            <ReactEcharts
                option={optionB}
                style={{
                    height: 800
                }}
            />
        </div>  
    );
}
export default Tokenomics;