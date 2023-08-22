// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import RecipeCard from "./RecipeCard";

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

  const [isOpen, setIsOpen] = useState(true);

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
      {/* <button className="w-12 h-12 bg-red-500 sticky bottom-0 right-0 m-8 rounded-full">
            <i className='fa-solid fa-plus'></i>
      </button> */}
        <div
          className={` ${
            isOpen ? "" : "hidden"
          } fixed w-full h-full text-black backdrop-blur-sm`}
        >
          <div className="fixed top-[30%] flex flex-col w-full px-4 z-[200] drop-shadow-2xl ">
            <div className="flex flex-row items-center rounded-t-md bg-white h-12 justify-end border border-gray-100 border-1">
              <div className="mr-auto text-xl font-bold mx-8">New Recipe</div>
              <i
              onClick={() => setIsOpen(false)}
              className="fa-solid fa-close my-auto mx-8"
              ></i>
            </div>
            <div className="flex flex-col space-y-4 py-8 px-8 bg-white">
              <input type="text" placeholder="Name" className="border border-1 p-2 rounded-md" />
              <input type="text" placeholder="Difficulty" className="border border-1 p-2 rounded-md" />
              <input type="text" placeholder="20mins" className="border border-1 p-2 rounded-md" />
            </div>
            <button
                className="bg-green-600 rounded-b-md p-2 w-full text-white font-bold"
                onClick={() => addNewRecipe()}
              >
              Confirm
            </button>
            </div>
        </div>
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
