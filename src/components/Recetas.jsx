import React, { useState, useEffect } from "react";
import RecipeCard from "./RecipeCard";
import Modal from "./Modal";
import RecipeInputField from "./RecipeInput.jsx";
import RecipeCheckbox from "./RecipeCheckbox.jsx";

const AddRecipeModal = ({ isOpen, onClose, onConfirm, newRecipe, setNewRecipe }) => {
  const fields = ["name", "imageSrc", "difficulty", "time"];
  const proteins = ["vegan", "meat", "spicy", "fish"];

  return (
    <Modal isOpen={isOpen} title={"Add Recipe"} onClose={onClose} onConfirm={onConfirm}>
      {fields.map((field) => (
        <RecipeInputField
          key={field}
          placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
          value={newRecipe[field]}
          onChange={(evt) => setNewRecipe({ ...newRecipe, [field]: evt.target.value })}
        />
      ))}
      <div className="flex flex-wrap text-sm">
        {proteins.map((prot) => (
          <RecipeCheckbox
            key={prot}
            label={prot}
            checked={newRecipe[prot]}
            onChange={() => setNewRecipe({ ...newRecipe, [prot]: !newRecipe[prot] })}
          />
        ))}
      </div>
    </Modal>
  );
};

const DeleteRecipeModal = ({ isOpen, onClose, selectedItem, deleteRecipe }) => {
  return (
    <Modal title={`Delete Recipe`} isOpen={isOpen} onClose={onClose}>
      <div className="px-2 text-xs">
        {`Sure you want to delete the recipe ${selectedItem.name ? selectedItem.name : ""}?`}
      </div>
      <div className="flex flex-row">
        <div className="w-1/2 mx-2 bg-green-500 rounded-md text-center text-white font-black">
          <button className="py-1" onClick={() => deleteRecipe(selectedItem)}>
            Delete
          </button>
        </div>
        <div className="w-1/2 mx-2 bg-red-500 rounded-md text-center text-white font-black">
          <button className="py-1" onClick={() => onClose()}>
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
};

const Recetas = () => {

  const api = import.meta.env.VITE_BACKEND_URL

  useEffect(()=>{

    const fetchMessage = async () => {
      try{
        let resp = await fetch(api)
        let data = await resp.json()
        console.log(data.message)
      }catch(err){
        console.log(err)
      }
    }
    fetchMessage()
  },[])

  const [isOpen, setIsOpen] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});
  const [newRecipe, setNewRecipe] = useState({
      imageSrc:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=999&q=80",
      name: "",
      time: "",
      vegan: false,
      meat: false,
      spicy: false,
      fish: false,
      ingredients: ["lettuce", "tomatoes"],
      difficulty: "Normal",
  });
  const [recipes, setRecipes] = useState([
    {
      id: 1,
      imageSrc:
        "https://plus.unsplash.com/premium_photo-1675252369719-dd52bc69c3df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      imageAlt: "burger",
      name: "Beef Burger",
      time: "20mins",
      vegan: true,
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
    setRecipes([...recipes, { id: recipes.length + 1, ...newRecipe }]);
    setIsOpen(false);
  };

  const deleteRecipe = (receta) => {
    setRecipes(recipes.filter((itm) => itm.id !== receta.id));
    setIsDelete(false);
  };

  return (
    <>
      <AddRecipeModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onConfirm={() => addNewRecipe()}
        newRecipe={newRecipe}
        setNewRecipe={setNewRecipe}
      />

      <DeleteRecipeModal
        isOpen={isDelete}
        onClose={() => setIsDelete(false)}
        selectedItem={selectedItem}
        deleteRecipe={deleteRecipe}
      />

      <div style={{ minHeight: `calc(100vh - 12rem)` }}>
        <h2 className="text-2xl font-bold text-black mx-8 my-2">My Recipes</h2>
        <div className="flex flex-wrap">
          {recipes.map((receta, index) => (
            <div key={index} className="w-1/2 px-8 py-2" onClick={() => {
              setIsDelete(true);
              setSelectedItem(receta);
            }}>
              <RecipeCard receta={receta} />
            </div>
          ))}
        </div>
      </div>
      <button className="sticky w-full bottom-0" onClick={() => setIsOpen(true)}>
        <div className="w-12 h-12 bg-red-500 m-8 ml-auto rounded-full flex items-center justify-center">
          <i className="fa-solid fa-plus"></i>
        </div>
      </button>
    </>
  );
};

export default Recetas;
