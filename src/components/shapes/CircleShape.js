import React, { useState } from 'react';

//Import circle from konvajs
import { Circle} from 'react-konva';


/**
 * This component represents a circle shape on the canvas
 */
const CircleShape = (props) => {
    const [canvasItem] = useState(props.canvasItem);

    const handleDragEnd = (evt) => {
        console.log('circle.handleDragEnd');
    };

    const handleSimpleClick = (evt) => {
        console.log('circle.handleSimpleClick');
    };

    return (
    <Circle 
        x={canvasItem.x} 
        y={canvasItem.y} 
        radius={canvasItem.radius} 
        fill={canvasItem.fill}
        stroke={canvasItem.stroke}
        strokeWidth={canvasItem.strokeWidth}

        draggable={canvasItem.draggable}
        onDragEnd={handleDragEnd}
        onClick={handleSimpleClick}/>
    );

}

export default CircleShape;