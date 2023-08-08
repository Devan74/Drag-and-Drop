import React from 'react';
import { useDrag } from 'react-dnd';

const FoodItem = ({ name, type, imageSrc }) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'FOOD_ITEM',
    item: { name, type ,imageSrc},
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return ( 
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        border: '3px dashed #000100',
        margin: '0.5px',
        // backgroundColor: type === 'healthy' ? 'lightgreen' : 'salmon',
        backgroundColor:'white',
        width:'90px',
        height:'70px',
      }}
    >
      <img src={imageSrc} alt={name} style={{ width: '90px', height: '70px' }} />
    </div>
  );
};

export default FoodItem;