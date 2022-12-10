import { useState } from "react";

const Meal = ({ meal, onDelete, onEdit, setMealToEdit }) => {
  return (
    <li className="card mb-2">
      <div className="card-body d-flex justify-content-between align-items-center">
        <h5 className="card-title m-0">{meal.meal}</h5>
        <p className="card-text m-0">{meal.calories} calories</p>
        <div className="btn-group gap-3">
          <i
            className="fas fa-edit"
            onClick={() => {
              onEdit(true);
              setMealToEdit(meal);
            }}
          ></i>
          <i className="fas fa-trash-alt" onClick={() => onDelete(meal.id)}></i>
        </div>
      </div>
    </li>
  );
};

export default Meal;
