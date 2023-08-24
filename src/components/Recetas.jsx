// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import RecipeCard from "./RecipeCard";
import Modal from "./Modal";

const Recetas = () => {
  const newBurger = {
    imageSrc:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=999&q=80",
    imageAlt: "burger",
    name: "Beef Burger",
    time: "20mins",
    vegan: false,
    ingredients: [
      "lettuce",
      "tomatoes",
      "sesame",
      "avocado",
      "cheddar",
      "meat",
    ],
    difficulty: "Normal",
  };

  const [isOpen, setIsOpen] = useState(false);

  const [recipes, setRecipes] = useState([
    {
      id: 1,
      imageSrc:
        "https://plus.unsplash.com/premium_photo-1675252369719-dd52bc69c3df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      imageAlt: "burger",
      name: "Beef Burger",
      time: "20mins",
      vegan: false,
      ingredients: [
        "lettuce",
        "tomatoes",
        "sesame",
        "avocado",
        "cheddar",
        "meat",
      ],
      difficulty: "Normal",
    },
    {
      id: 2,
      imageSrc:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=999&q=80",
      imageAlt: "burger",
      name: "Beef Burger",
      time: "20mins",
      vegan: false,
      ingredients: [
        "lettuce",
        "tomatoes",
        "sesame",
        "avocado",
        "cheddar",
        "meat",
      ],
      difficulty: "Normal",
    },
    {
      id: 2,
      imageSrc:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=999&q=80",
      imageAlt: "burger",
      name: "Beef Burger",
      time: "20mins",
      vegan: false,
      ingredients: [
        "lettuce",
        "tomatoes",
        "sesame",
        "avocado",
        "cheddar",
        "meat",
      ],
      difficulty: "Normal",
    },
    {
      id: 2,
      imageSrc:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=999&q=80",
      imageAlt: "burger",
      name: "Beef Burger",
      time: "20mins",
      vegan: false,
      ingredients: [
        "lettuce",
        "tomatoes",
        "sesame",
        "avocado",
        "cheddar",
        "meat",
      ],
      difficulty: "Normal",
    },
    {
      id: 2,
      imageSrc:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=999&q=80",
      imageAlt: "burger",
      name: "Beef Burger",
      time: "20mins",
      vegan: false,
      ingredients: [
        "lettuce",
        "tomatoes",
        "sesame",
        "avocado",
        "cheddar",
        "meat",
      ],
      difficulty: "Normal",
    },
  ]);

  const addNewRecipe = () => {
    setRecipes([...recipes, { id: recipes.length + 1, ...newBurger }]);
    setIsOpen(false);
  };

  return (
    <>
        <Modal isOpen={isOpen} title={"Add Recipe"} onClose={() => setIsOpen(false)} onConfirm={() => addNewRecipe()}>
          <input type="text" placeholder="Name" className="border border-1 p-2 rounded-md" />
          <input type="text" placeholder="Difficulty" className="border border-1 p-2 rounded-md" />
          <input type="text" placeholder="20mins" className="border border-1 p-2 rounded-md" />
        </Modal>
            
      <div className="flex flex-wrap ">
        {recipes.map((receta, index) => (
          <RecipeCard key={index} receta={receta} />
        ))}

      </div>
      <button className="sticky w-full bottom-0" onClick={()=> setIsOpen(true)}>
        <div className="w-12 h-12 bg-red-500 m-8 ml-auto rounded-full flex items-center justify-center">
          <i className="fa-solid fa-plus"></i>
        </div>
      </button>
    </>
  );
};

export default Recetas;
