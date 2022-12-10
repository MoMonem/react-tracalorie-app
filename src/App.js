import Header from "./components/header";
import Stats from "./components/stats";
import Meals from "./components/meals";
import Form from "./components/form";
import EditForm from "./components/editForm";
import { useState, useEffect } from "react";

function App() {
  const [meals, setMeals] = useState([]),
    [totals, setTotals] = useState({ calories: 0, meals: 0 }),
    [editingMeal, setEditingMeal] = useState(false),
    [mealToEdit, setMealToEdit] = useState(null);

  async function getMeals() {
    const res = await fetch("http://localhost:5000/meals"),
      data = await res.json();
    return data;
  }

  useEffect(() => {
    getMeals()
      .then((meals) => {
        setMeals(meals);
        calculateTotals();
      })
      .catch((err) => console.log(err));
  }, []);

  async function addMeal(meal) {
    const res = await fetch("http://localhost:5000/meals", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(meal),
    });
    const data = await res.json();
    setMeals([...meals, data]);
    calculateTotals();
  }

  async function deleteMeal(id) {
    await fetch(`http://localhost:5000/meals/${id}`, {
      method: "DELETE",
    });
    setMeals(meals.filter((meal) => meal.id !== id));
    calculateTotals();
  }

  async function deleteAllMeals() {
    for (let i = 0; i < meals.length; i++) {
      await fetch(`http://localhost:5000/meals/${meals[i].id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .catch((err) => console.log(err));
    }
    setMeals([]);
    calculateTotals();
  }

  async function calculateTotals() {
    await getMeals().then((data) => {
      const totalCalories = data.reduce((acc, meal) => acc + +meal.calories, 0);
      setTotals({ calories: totalCalories, meals: data.length });
    });
  }

  return (
    <>
      <Header />
      <Stats totals={totals} />
      {editingMeal ? (
        <EditForm mealToEdit={mealToEdit} setEditingMeal={setEditingMeal} />
      ) : (
        <Form onAdd={addMeal} />
      )}
      <Meals
        onDeleteAll={deleteAllMeals}
        meals={meals}
        onDelete={deleteMeal}
        onEdit={setEditingMeal}
        setMealToEdit={setMealToEdit}
      />
    </>
  );
}

export default App;
