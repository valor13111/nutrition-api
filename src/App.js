import React, { useState, useEffect } from "react";
import "./App.css";
import * as apiConstants from "./constants/keys";
import axios from "axios";

import NutritionTotalDaily from "./components/NutritionTotalDaily/NutritionTotalDaily";
import NutritionLabels from "./components/NutritionLabels/NutritionLabels";

function App() {
  const [nutrition, setNutrition] = useState({
    calories: 0,
    dietLabels: [],
    totalDaily: [{}],
    healthLabels: []
  });

  const [showNutrition, setShowNutrition] = useState(false);

  useEffect(() => {
    axios
      .get(
        `https://api.edamam.com/api/nutrition-data?app_id=${apiConstants.API_ID}&app_key=${apiConstants.API_KEY}&ingr=1%20large%20apple`
      )
      .then(res => {
        setNutrition(res.data);
      });
  });

  function canShowNutrition() {
    return (
      showNutrition && (
        <>
          <h2>
            <span className={"text-light text-uppercase"}>Calories: </span>
            <span className={"text-success"}>{nutrition.calories}</span>
          </h2>
          <NutritionLabels
            title={"Diet Labels"}
            collection={nutrition.dietLabels}
          />
          <NutritionLabels
            title={"Health Labels"}
            collection={nutrition.healthLabels}
          />
          <NutritionTotalDaily totalDaily={nutrition.totalDaily} />
        </>
      )
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Nutrition API</h1>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => setShowNutrition(!showNutrition)}
        >
          Show Example Nutrition
        </button>

        {canShowNutrition()}
      </header>
    </div>
  );
}

export default App;
