import { Stage, Layer, Rect} from 'react-konva';
import React, { useEffect, useState } from 'react';

import CircleShape from './shapes/CircleShape.js'
import RectShape from './shapes/RectShape.js'


const Canvas = (props) => {
    const [canvasItems, setItems] = useState(props.canvasItems);

    // Re-render the canvas element when the prop canvasItems update
    useEffect(() => {
      const updateCanvasItems = () => {
        setItems(props.canvasItems);
      }
      
      updateCanvasItems();
    });


  return (
        <Stage id="canvasEdit" width={1000} height={1000}>
          {/* Canvas background */}
          <Layer>
            <Rect
              x={0}
              y={0}
              id={0}
              width={1000}
              height={500}
              fill='#ffffff'
            />
          </Layer>

          {/* For each items in the showcase, we map a shape object to represent it on canvas */}
          <Layer>
            {canvasItems.map((item, index) => {
              if (item.shape === 'rect') {
                return (<RectShape canvasItem={item} key={index}/>);
              }
              else {
                return (<CircleShape canvasItem={item} key={index}/>);     
              }
            })}
          </Layer>
      </Stage>
  );
}

export default Canvas;
