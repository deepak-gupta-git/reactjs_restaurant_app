import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import './App.css';
import foodData from '../public/Data/data';

const App = () => {
  const [filteredData, setFilteredData] = useState(foodData); 

  const filterItems = (type) => {
    if (type === "all") {
      setFilteredData(foodData); 
    } else {
      const filtered = foodData.filter((item) => item.type === type);
      setFilteredData(filtered); 
    }
  };

  return (
    <div className="container main">
      <h1 className="text-center my-4">Best Food Restaurant</h1>

      <div className="d-flex justify-content-center mb-4 flex-wrap">
        <button className="btn btn-danger m-2" onClick={() => filterItems("breakfast")}>
          Breakfast
        </button>
        <button className="btn btn-danger m-2" onClick={() => filterItems("lunch")}>
          Lunch
        </button>
        <button className="btn btn-danger m-2" onClick={() => filterItems("dinner")}>
          Dinner
        </button>
        <button className="btn btn-danger m-2" onClick={() => filterItems("all")}>
          All
        </button>
      </div>
 
      <div className="row">
        {filteredData.map((curElem) => {
          return (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={curElem.id}>
              <div className="card h-80">
                <img src={curElem.image} alt={curElem.name} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{curElem.name}</h5>
                  <h6 className="card-text">Price: ₹{curElem.price}</h6>
                  <p className="card-text">{curElem.text}</p>
                  <p className="card-text">Type: {curElem.type}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
