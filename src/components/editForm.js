import { useState, useEffect } from "react";

const EditForm = ({ mealToEdit, setEditingMeal }) => {
  const [meal, setMeal] = useState(""),
    [calories, setCalories] = useState(0);

  useEffect(() => {
    setMeal(mealToEdit.meal);
    setCalories(mealToEdit.calories);
  }, [mealToEdit]);

  async function editMeal(e) {
    e.preventDefault();
    await fetch(`http://localhost:5000/meals/${mealToEdit.id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ meal, calories, id: mealToEdit.id }),
    })
      .then((res) => res.json())
      .then((data) => window.location.reload())
      .catch((err) => console.log(err));

    setEditingMeal(false);
  }
  return (
    <section className="form-section my-3">
      <div className="container" style={{ maxWidth: "650px" }}>
        <div className="card">
          <div className="card-body">
            <div className="row justify-content-between align-items-center mb-3">
              <h5 className="card-title col">Edit Meal</h5>
              <i
                className="fas fa-times col-auto"
                onClick={() => setEditingMeal(false)}
              ></i>
            </div>
            <form
              onSubmit={editMeal}
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
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditForm;
