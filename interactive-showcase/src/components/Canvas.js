import { Stage, Layer, Rect} from 'react-konva';
import React, { useEffect, useState } from 'react';


const Canvas = (props) => {
    const [canvasItems, setItems] = useState(props.canvasItems);

    const handleDragEnd = (evt) => {
        let listItems = [...canvasItems];
        let itemToModify = {...listItems.filter(item => item.id == evt.target.attrs.id)}
        itemToModify.x = evt.target.attrs.x;
        listItems[listItems.indexOf(itemToModify)] = itemToModify;
        setItems(listItems);
        //props.onItemsChanged(listItems)
    };

    useEffect(() => {
        setItems(props.canvasItems);
      });

  return (
    <div className="ShowcaseEditor">
        <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
        {canvasItems.map((item) => (
          <Rect
            x={item.x}
            y={item.y}
            id={item.id}
            width={item.width}
            height={item.height}
            fill={item.fill}
            cornerRadius={item.cornerRadius}
            
            shadowColor={item.shadowColor}
            shadowBlur={item.shadowBlur}
            shadowOpacity={item.shadowOpacity}

            stroke={item.stroke}
            strokeWidth={item.strokeWidth}

            draggable={item.draggable}
            onDragEnd={handleDragEnd}
          />
        ))}
        </Layer>
      </Stage>
    </div>
  );
}

export default Canvas;
