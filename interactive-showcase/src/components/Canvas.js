import { Stage, Layer, Rect, Circle} from 'react-konva';
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

    const handleSimpleClick = (evt) => {
      const canvasElement = evt.target.attrs;
      props.onItemClicked(canvasElement);
  };

    useEffect(() => {
        setItems(props.canvasItems);
      });

    const itemMapper = () => {
      canvasItems.map((item) => (
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
      ))
    }

  return (
    <div className="ShowcaseEditor">
        <Stage id="canvas" width={1000} height={1000}>
          <Layer><Rect
            x={0}
            y={0}
            id={0}
            width={1000}
            height={500}
            fill='#ffffff'
          />
          
          
          </Layer>

          <Layer>
        {canvasItems.map((item) => {
        if (item.shape == 'rect') {
          return (<Rect
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
            onClick={handleSimpleClick}
          />)
        }
        else {
          return (<Circle 
            x={item.x} 
            y={item.y} 
            radius={item.radius} 
            fill={item.fill}
            stroke={item.stroke}
            strokeWidth={item.strokeWidth}
  
            draggable={item.draggable}
            onDragEnd={handleDragEnd}
            onClick={handleSimpleClick}/>)
        }
      })}
        </Layer>
        
      </Stage>

      
    </div>
  );
}

export default Canvas;
