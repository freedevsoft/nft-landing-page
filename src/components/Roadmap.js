import React, { useEffect, useRef, useState } from 'react';
import { data } from '../config.js';
import MarkImg from '../assets/images/roadmap-mark.jpg';
const Mark = new Image();
Mark.src = MarkImg;
const HEXSIZE = 80;

const Roadmap = () => {

    return (
        <div className="d-flex flex-column">
            <span className="page-title">PROJECT ROADMAP, MILESTONES AND TARGET ACHIEVEMENTS</span>
            <RoadmapCanvas data={data} />
        </div>  
    );
}

const RoadmapCanvas = ({data}) => {
    const [height, setHeight] = useState(0);
    const canvasRef = useRef(null)
    // const canvas = canvasRef.current
    // const context = canvas.getContext('2d')
    const drawHex = (ctx, _center, str) => {
        ctx.save();
        ctx.translate(_center.x, _center.y)
        const center = Point(0, 0);
        ctx.rotate(-30 * Math.PI / 180);
        for(let i = 0; i <= 5; i ++){
            let start = getHexCornerCord(center, i);
            let end = getHexCornerCord(center, i + 1);
            drawLine(ctx, Point(start.x, start.y), Point(end.x, end.y))
        }
        const lines = getLines(ctx, str)
        ctx.textAlign = 'center';
        const yOffset =  lines.length * 12 / 2;
        for ( let i = 0, j = lines.length; i < j; ++ i ) {
            ctx.fillText( lines[i], center.x, center.y - yOffset + 16 * i );
        }
        ctx.stroke();
        ctx.restore();
    }
    const drawLine = (ctx, start, end) => {
        ctx.beginPath();
        ctx.moveTo(start.x, start.y);
        ctx.lineTo(end.x, end.y);
        ctx.stroke();
        ctx.closePath();
    }
    const getHexCornerCord = (center, i) => {
        let angle_deg = 60 * i - 30;
        let angle_rad = Math.PI / 180 * angle_deg;
        let x = center.x + HEXSIZE * Math.cos(angle_rad);
        let y = center.y + HEXSIZE * Math.sin(angle_rad);
        return Point(x, y);
    }
    const Point = (x, y) =>  ({x, y})
    const getLines = ( ctx, text ) => {
        const max_width = (HEXSIZE - 20) * 2;
        let lines = new Array();
        let width = 0, i, j;
        let result;
        
        // Start calculation
        while ( text.length ) {
            for( i = text.length; ctx.measureText(text.substr(0,i)).width > max_width; i-- );
        
            result = text.substr(0,i);
        
            if ( i !== text.length )
                for( j = 0; result.indexOf(" ", j) !== -1; j = result.indexOf(" ", j) + 1 );
            
            lines.push( result.substr(0, j || result.length));
            width = Math.max( width, ctx.measureText(lines[ lines.length - 1 ]).width );
            text = text.substr( lines[ lines.length - 1 ].length, text.length );
        }
        return lines;
    }
    const startDrawing  = () => {
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        context.font = "14px arial"
        context.fillStyle = 'white'
        context.strokeStyle = '#ffffff'
        context.fontStyle = 'white'
        context.lineWidth = 2
        let i = 1
        data.map((item) => {
            context.drawImage(Mark, 180, 100 * i - 23, 100, 46);
            context.save();
            context.font = "46px gagalin"
            context.fillText(item.title, 0, 100 * i + 14);
            context.restore();
            item.value.map((text) => {
                if(i & 1) {
                    drawHex(context, Point(700, 100 * i), text)
                    drawLine(context, Point(580, 100 * i), Point(620, 100 * i))
                }
                else {
                    drawHex(context, Point(460, 100 * i), text)
                    drawLine(context, Point(580, 100 * i), Point(540, 100 * i))
                }
                i ++;
            })
        })
        setHeight(i);
        drawLine(context, Point(580, 0), Point(580, 100 * i))
        context.save()
        context.lineWidth = 5
        context.lineCap = "round"
        drawLine(context, Point(280, 0), Point(280, 100 * i))
        context.restore();
    }
    useEffect(() => {
        let itemCounts = 0;
        data.map((item) => {
            return itemCounts += item.value.length;
        })
        setHeight(itemCounts);
        setTimeout(startDrawing, 300);
        // startDrawing();
      }, [])
    
    return <canvas ref={canvasRef} width={800} height={3000}/>
}

export default Roadmap;