import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [items, setItems] = useState([
    { id: 1, img: 'images/download.jpeg' },
    { id: 2, img: 'images/download.jpeg' },
    { id: 3, img: 'images/download.jpeg' },
    { id: 4, img: 'images/download.jpeg' },
  ]);

  const [droppedItems, setDroppedItems] = useState([]);

  const handleDragStart = (e, item) => {
    e.dataTransfer.setData('text/plain', JSON.stringify(item));
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const item = JSON.parse(e.dataTransfer.getData('text/plain'));
    setDroppedItems((prevItems) => [...prevItems, item]);
  };

  const handleReset = () => {
    setItems([
      { id: 1, img: 'images/download.jpeg' },
      { id: 2, img: 'images/download.jpeg' },
      { id: 3, img: 'images/download.jpeg' },
      { id: 4, img: 'images/download.jpeg' },
    ]);
    setDroppedItems([]);
  };

  return (
    <>
      <div className='Item'>
        <div className="container">
          {items.map((item) => (
            <div
              key={item.id}
              className="item"
              draggable="true"
              onDragStart={(e) => handleDragStart(e, item)}
            >
              <img src={item.img} alt="" />
            </div>
          ))}
        </div>
        <div
          className="container"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          {droppedItems.length === 0 ? (
            <p>Drop items here</p>
          ) : (
            droppedItems.map((item) => (
              <div key={item.id} className="item">
                <img src={item.img} alt="" />
              </div>
            ))
          )}
        </div>
      </div>
      <button className="reset-button" onClick={handleReset}>Reset</button>
    </>
  );
};

export default App;
