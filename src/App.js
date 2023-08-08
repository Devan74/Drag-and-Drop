import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import FoodItem from "./FoodItem";
import FoodList from "./FoodList";
import carrot from "./image/carrot.jpg";
import Icecream from "./image/Ice cream.avif";
import Juice from "./image/Juice.jpg";
import Doughnut from "./image/Doughnut.jpg";
import Broccoli from "./image/Broccoli.jpg";
import Bread from "./image/Bread.jpg";
import Frenchfries from "./image/French fries.jpg";
import Watermelon from "./image/Watermelon.jpg";
import Burger from "./image/Burger.jpg";
import Cake from "./image/Cake.jpg";
import Milk from "./image/Milk.jpg";
import Apple from "./image/Apple.jpg";

const App = () => {
  const [foodItems, setFoodItems] = useState([
    { name: "Ice cream", type: "unhealthy", imageSrc: Icecream },
    { name: "Juice", type: "unhealthy", imageSrc: Juice },
    { name: "Carrot", type: "healthy", imageSrc:carrot},
    { name: "Doughnut", type: "unhealthy", imageSrc: Doughnut },
    { name: "Broccoli", type: "healthy", imageSrc:Broccoli },
    { name: "Bread", type: "healthy", imageSrc: Bread },
    { name: "French fries", type: "unhealthy", imageSrc: Frenchfries },
    { name: "Watermelon", type: "healthy", imageSrc: Watermelon },
    { name: "Burger", type: "unhealthy", imageSrc: Burger },
    { name: "Cake", type: "unhealthy", imageSrc: Cake },
    { name: "Milk", type: "healthy", imageSrc: Milk },
    { name: "Apple", type: "healthy", imageSrc: Apple },
  ]);
  const [healthyItems, setHealthyItems] = useState([]);
  const [unhealthyItems, setUnhealthyItems] = useState([]);

  const handleDrop = (item, type) => {
    if (item.type !== type) {
      return;
    }

    setFoodItems((prevItems) =>
      prevItems.filter((prevItem) => prevItem.name !== item.name )
    );

    if (type === "healthy") {
      setHealthyItems((prevItems) => [...prevItems, item]);
    } else if (type === "unhealthy") {
      setUnhealthyItems((prevItems) => [...prevItems, item]);
    }
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div
        className="container"
        style={{
          border: "5px dotted #000100",
          backgroundColor: "#c7ffd2",
          width: "31rem",
          height: "50rem",
          margin: "2rem 29rem",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            backgroundColor: "#feed93",
            padding: "5px",
          }}
        >
          HEALTHY AND UNHEALTHY FOOD
        </h2>
        <u style={{fontSize:'1.1rem'}}>Group the food into 'Healthy' or 'Unhealthy' food. </u>
        <div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              margin: "10px 3.4rem ",
            }}
          >
            {foodItems.map((item, index) => (
              <FoodItem
                key={index}
                name={item.name}
                type={item.type}
                imageSrc={item.imageSrc}
              />
            ))}
          </div>
        </div>
        <div
          className="result"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <FoodList
            title="Healthy Foods"
            type="healthy"
            items={healthyItems}
            onDrop={handleDrop}
            
          />
          <FoodList
            title="Unhealthy Foods"
            type="unhealthy"
            items={unhealthyItems}
            onDrop={handleDrop}
          />
        </div>
      </div>
    </DndProvider>
  );
};

export default App;
