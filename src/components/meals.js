import Meal from "./meal";

const Meals = ({ meals, onDelete, onDeleteAll, onEdit, setMealToEdit }) => {
  return (
    <section className="list-section my-3">
      <div className="container" style={{ maxWidth: "650px" }}>
        {meals.length > 0 ? (
          <div className="d-flex gap-2 justify-content-end align-items-center mb-3">
            <button className="btn btn-danger" onClick={() => onDeleteAll()}>
              <i className="fas fa-trash-alt mx-1" />
              Delete All
            </button>
          </div>
        ) : (
          <h5 className="text-muted text-center">No meals to show</h5>
        )}
        <ul className="list-group">
          {meals.map((meal) => (
            <Meal
              key={meal.id}
              meal={meal}
              onDelete={onDelete}
              onEdit={onEdit}
              setMealToEdit={setMealToEdit}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Meals;
