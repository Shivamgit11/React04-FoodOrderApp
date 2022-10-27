import Card from "../UI/Card";
import MealItem from "./Mealitem/Mealitem";
import classes from "./AvailableMeals.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Biryani",
    description: "Finest Chicken with love",
    price: 180,
  },
  {
    id: "m2",
    name: "Paneer Chilli",
    description: "A local test!",
    price: 160,
  },
  {
    id: "m3",
    name: "Mushroom masala",
    description: "Indian, raw, Veg",
    price: 129,
  },
  {
    id: "m4",
    name: "Fried Rice",
    description: "Healthy...and green...",
    price: 189,
  },
];

const AvailableMeals = () => {
  const mealslist = DUMMY_MEALS.map((meal) => 
  <MealItem 
  key={meal.id}
  name={meal.name} 
  description={meal.description} 
  price={meal.price} 
  
  />);
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealslist}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
