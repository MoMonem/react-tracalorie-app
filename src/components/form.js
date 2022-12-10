import { useState } from "react";

const Form = ({ onAdd }) => {
  const [meal, setMeal] = useState(""),
    [calories, setCalories] = useState(0);

  const addMeal = (e) => {
    e.preventDefault();
    if (!meal) {
      alert("Please add a meal");
      return;
    }
    onAdd({ meal, calories });
    setMeal("");
    setCalories(0);
  };

  return (
    <section className="form-section my-3">
      <div className="container" style={{ maxWidth: "650px" }}>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title mb-4">Add Item</h5>
            <form
              onSubmit={addMeal}
              className="row justify-content-center align-items-center"
            >
              <div className="col">
                <div className="form-group d-flex justify-content-center align-items-center gap-2">
                  <label htmlFor="meal">Meal</label>
                  <input
                    type="text"
                    className="form-control"
                    id="meal"
                    placeholder="i.e English breakfast"
                    value={meal}
                    onChange={(e) => setMeal(e.target.value)}
                  />
                </div>
              </div>
              <div className="col">
                <div className="form-group d-flex justify-content-center align-items-center gap-2">
                  <label htmlFor="calories">Calories</label>
                  <input
                    type="text"
                    className="form-control"
                    id="calories"
                    placeholder="i.e 400"
                    min={0}
                    value={calories}
                    onChange={(e) => setCalories(e.target.value)}
                  />
                </div>
              </div>
              <div className="row my-3">
                <button type="submit" className="btn btn-primary">
                  Add Meal
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
