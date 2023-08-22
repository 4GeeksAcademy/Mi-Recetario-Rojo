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
      }

    const [ isOpen , setIsOpen ] = useState(false)

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
      difficulty: "normal",
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
    setRecipes([ ...recipes, { id: recipes.length + 1, ...newBurger }])
    setIsOpen(false)
  }

  return (
    <div className="flex flex-wrap w-full h-full relative">
      {recipes.map((receta, index) => (
        <RecipeCard key={index} receta={receta} />
      ))}

      <button onClick={() => setIsOpen(true)} className="w-12 h-12 bg-red-500 absolute bottom-0 right-0 m-8 fixed rounded-full">
            <i className='fa-solid fa-plus'></i>
      </button>
    
        <div className={` ${ isOpen ? '' : 'hidden' } absolute w-full p-8 inset-[30%]  inset-x-auto text-black`}>
            <div className="flex flex-col h-full bg-white rounded-md shadow-xl">
                <div className="flex flex-row items-center h-12 justify-end border border-gray-100 border-1">
                    <div className="mr-auto font-bold mx-8">
                        New Recipe
                    </div>
                    <i  onClick={()=> setIsOpen(false)} className="fa-solid fa-close my-auto mx-8"></i>
                </div>
                <div className="flex flex-col space-y-4 px-8 my-auto divide-y">
                    <input type="text" placeholder="Name" className="" />
                    <input type="text" placeholder="Difficulty" />
                    <input type="text" placeholder="20mins" />
                </div>
                <button className="bg-green-600 p-2 text-white font-bold" onClick={() => addNewRecipe()}>
                    Confirm
                </button>
            </div>
        </div>
    </div>
  );
};

export default Recetas;
