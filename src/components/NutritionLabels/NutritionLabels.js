import React from "react";

function NutritionLabels(props) {
  return (
    <div>
      <h5 className="text-light">{props.title}</h5>
      <ul className="list-group list-group-horizontal">
        {props.collection.map(label => (
          <li className="list-group-item">{label}</li>
        ))}
      </ul>
    </div>
  );
}

export default NutritionLabels;
