import React from "react";
import Card from "../UI/Card";
import styles from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";
const DUMMY_DATA = [
  {
    id: "m1",
    name: "Chicken Biryani",
    price: "299",
    description: "spices, rice,chicken, beef, goat, lamb, prawn, and fish",
  },
  {
    id: "m2",
    name: "Cheese Pizza",
    price: "149",
    description:
      " bread dough , olive oil, oregano, tomato, olives, mozzarella , cheese",
  },
  {
    id: "m3",
    name: "BBQ Chicken Pizza.",
    price: "199",
    description:
      "  barbecue sauce, diced chicken, peppers, onion, and cilantro",
  },
  {
    id: "m4",
    name: "Panner Biryani",
    price: "129",
    description:
      " Paneer,Indian cottage cheese, mixed veggies on a pizza dough ",
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_DATA.map((meals) => (
    <MealItem
      key={meals.id}
      id={meals.id}
      name={meals.name}
      description={meals.description}
      price={meals.price}
    />
  ));
  return (
    <section className={styles.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};
export default AvailableMeals;
