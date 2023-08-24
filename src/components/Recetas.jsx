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
  ]);

  const [ newRecipe , setNewRecipe ] = useState({
    imageSrc:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=999&q=80",
    imageAlt: "",
    name: "",
    time: "",
    vegan: false,
    meat: false,
    spicy: false,
    fish: false,
    ingredients: [
      "lettuce",
      "tomatoes",
    ],
    difficulty: "Normal",
  })
  
  const addNewRecipe = () => {
    setRecipes([...recipes, { id: recipes.length + 1, ...newRecipe }]);
    setIsOpen(false);
  };

  return (
    <>
        <Modal isOpen={isOpen} title={"Add Recipe"} onClose={() => setIsOpen(false)} onConfirm={() => addNewRecipe()}>
          <input type="text" placeholder="Name" onChange={(evt)=> setNewRecipe({ ...newRecipe, name: evt.target.value })} value={newRecipe.name || "" } className="border border-1 p-2 rounded-md" />
          <input type="text" placeholder="Imagen" onChange={(evt)=> setNewRecipe({ ...newRecipe, imageSrc: evt.target.value })} value={newRecipe.imageSrc || "" } className="border border-1 p-2 rounded-md" />
          <input type="text" placeholder="Difficulty" onChange={(evt)=> setNewRecipe({ ...newRecipe, difficulty: evt.target.value })} value={newRecipe.difficulty || "" } className="border border-1 p-2 rounded-md" />
          <input type="text" placeholder="20mins" onChange={(evt)=> setNewRecipe({ ...newRecipe, time: evt.target.value })} value={newRecipe.time || "" } className="border border-1 p-2 rounded-md" />
          
          <div className="flex flex-wrap text-xs">
            <div className="m-2">
              <label htmlFor="">vegan</label>
              <input  type="checkbox" label="vegan" onChange={()=> setNewRecipe({ ...newRecipe, vegan: !newRecipe.vegan })} value={newRecipe.vegan } className="border border-1 p-2 rounded-md m-1" />
            </div>
              <div className="m-2">
                <label htmlFor="">meat</label>
                <input   type="checkbox" label="vegan" onChange={()=> setNewRecipe({ ...newRecipe, meat: !newRecipe.meat })} value={newRecipe.meat } className="border border-1 p-2 rounded-md m-1" />
              </div>
              <div className="m-2">
                <label htmlFor="">spicy</label>
                <input  type="checkbox" label="vegan" onChange={()=> setNewRecipe({ ...newRecipe, spicy: !newRecipe.spicy })} value={newRecipe.spicy } className="border border-1 p-2 rounded-md m-1" />
              </div>
              <div className="m-2">
                <label htmlFor="">fish</label>
                <input  type="checkbox" label="vegan" onChange={()=> setNewRecipe({ ...newRecipe, fish: !newRecipe.fish })} value={newRecipe.fish } className="border border-1 p-2 rounded-md m-1" />
              </div>
          </div>
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
