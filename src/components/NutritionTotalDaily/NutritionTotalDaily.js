import React from "react";
import * as apiConstants from "../../constants/keys";

function NutritionTotalDaily({ totalDaily }) {
  const filteredList = Object.keys(totalDaily)
    .filter(key => apiConstants.VALID_LABELS.includes(key))
    .reduce((obj, key) => {
      return {
        ...obj,
        [key]: totalDaily[key]
      };
    }, {});

  return (
    <div>
      <h5 className="text-light">Diet Labels</h5>
      <ul className="list-group list-group-horizontal">
        {Object.keys(filteredList).map(key => (
          <li key={key.toString()} className="list-group-item">
            <p class="float-left">{filteredList[key].label}: </p>
            <p class="float-right">
              {parseInt(filteredList[key].quantity).toFixed(2)}%
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NutritionTotalDaily;
