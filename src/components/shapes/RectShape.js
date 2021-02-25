import React, { useState } from 'react';

//Import circle from konvajs
import { Rect } from 'react-konva';


/**
 * This component represents a rect shape on the canvas
 */
const RectShape = (props) => {
    const [canvasItem] = useState(props.canvasItem);

    const handleDragEnd = (evt) => {
        console.log('rect.handleDragEnd');
    };

    const handleSimpleClick = (evt) => {
        console.log('rect.handleSimpleClick');
    };

    return (
        <Rect
            x={canvasItem.x}
            y={canvasItem.y}
            id={canvasItem.id}
            width={canvasItem.width}
            height={canvasItem.height}
            fill={canvasItem.fill}
            cornerRadius={canvasItem.cornerRadius}
            
            shadowColor={canvasItem.shadowColor}
            shadowBlur={canvasItem.shadowBlur}
            shadowOpacity={canvasItem.shadowOpacity}

            stroke={canvasItem.stroke}
            strokeWidth={canvasItem.strokeWidth}

            draggable={canvasItem.draggable}
            onDragEnd={handleDragEnd}
            onClick={handleSimpleClick}
        />
    );

}

export default RectShape;