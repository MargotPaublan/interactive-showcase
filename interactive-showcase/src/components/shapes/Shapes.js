import React, { useState } from 'react';

//Import circle from konvajs
import { Rect, Circle, Shape } from 'react-konva';



const BasicShape = (props) => {
    const [canvasItem] = useState(props.canvasItem);
    const [selected] = useState(props.selected);


    const handleDragEnd = (evt) => {
        console.log('rect.handleDragEnd');
    };

    const handleSimpleClick = (evt) => {
        console.log('rect.handleSimpleClick');
    };

    return (
        <Shape>
            {props.children}
        </Shape>
    );

}



const RectShape = (props) => {
    const [canvasItem] = useState(props.canvasItem);
    return (
        <BasicShape canvasItem={props.canvasItem} selected={false}>
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
   
            />
        </BasicShape>
    );

}


const CircleShape = (props) => {
    const [canvasItem] = useState(props.canvasItem);
    return (
        <Shape canvasItem={props.canvasItem} selected={false}>
            <Circle 
        x={canvasItem.x} 
        y={canvasItem.y} 
        radius={canvasItem.radius} 
        fill={canvasItem.fill}
        stroke={canvasItem.stroke}
        strokeWidth={canvasItem.strokeWidth}

        draggable={canvasItem.draggable}
        />
    );
        </Shape>
    );

}







export default {
    RectShape,
    CircleShape
}