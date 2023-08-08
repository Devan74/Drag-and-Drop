import React from 'react';
import { useDrop } from 'react-dnd';

const FoodList = ({ title, type, items, onDrop }) => {
  const [{ isOver }, drop] = useDrop({
    accept: 'FOOD_ITEM',
    drop: (item) => onDrop(item, type),
    collect: monitor => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <div
      ref={drop}
      style={{
        padding: '16px',
        border: '1px solid #ccc',
        backgroundColor: isOver ? 'lightgray' : 'white',
        width:'180px',
        height:'350px',
        margin:'10px',
        display:'flex',
        flexWrap:'wrap'
      }}
    >
      <h4>{title}</h4>
      {items.map((item, index) => (
        <div key={index}>
          <img src={item.imageSrc} alt={item.name} style={{ width: '70px', height: '70px',border: '1px solid #000100',margin:'8px' }} />
          {/* {console.log(item)} */}
        </div>
      ))}
    </div>
  );
};

export default FoodList;