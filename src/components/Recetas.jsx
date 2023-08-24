import React, { useState } from "react";
import RecipeCard from "./RecipeCard";
import Modal from "./Modal";
import RecipeInputField from "./RecipeInput.jsx";
import RecipeCheckbox from "./RecipeCheckbox.jsx";

const Recetas = () => {

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

  const [newRecipe, setNewRecipe] = useState({
    imageSrc:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=999&q=80",
    imageAlt: "",
    name: "",
    time: "",
    vegan: false,
    meat: false,
    spicy: false,
    fish: false,
    ingredients: ["lettuce", "tomatoes"],
    difficulty: "Normal",
  });

  const addNewRecipe = () => {
    setRecipes([...recipes, { id: recipes.length + 1, ...newRecipe }]);
    setIsOpen(false);
  };

  const fields = ["name", "imageSrc", "difficulty", "time"];
  const proteins = ["vegan", "meat", "spicy", "fish"];

  return (
    <>
      <Modal
        isOpen={isOpen}
        title={"Add Recipe"}
        onClose={() => setIsOpen(false)}
        onConfirm={() => addNewRecipe()}
      >
        {fields.map((field) => (
          <RecipeInputField
            key={field}
            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
            value={newRecipe[field]}
            onChange={(evt) =>
              setNewRecipe({ ...newRecipe, [field]: evt.target.value })
            }
          />
        ))}
        <div className="flex flex-wrap text-xs">
          {proteins.map((prot) => (
            <RecipeCheckbox
              key={prot}
              label={prot}
              checked={newRecipe[prot]}
              onChange={() =>
                setNewRecipe({ ...newRecipe, [prot]: !newRecipe[prot] })
              }
            />
          ))}
        </div>
      </Modal>

      <div className="flex flex-wrap ">
        {recipes.map((receta, index) => (
          <RecipeCard key={index} receta={receta} />
        ))}
      </div>
      <button
        className="sticky w-full bottom-0"
        onClick={() => setIsOpen(true)}
      >
        <div className="w-12 h-12 bg-red-500 m-8 ml-auto rounded-full flex items-center justify-center">
          <i className="fa-solid fa-plus"></i>
        </div>
      </button>
    </>
  );
};

export default Recetas;
