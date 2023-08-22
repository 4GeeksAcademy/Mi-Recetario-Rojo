import React from "react";

const RecipeCard = ({ receta }) => {
  return (
    <>
      <div className="w-1/2 p-4">
        <img
          src={receta.imageSrc}
          alt={receta.imageAlt}
          className="w-full object-cover object-center  aspect-square lg:h-full lg:w-full rounded-md"
        />
        <div className="">
          <h3 className="text-sm text-gray-700">
            {/* <span aria-hidden="true" className="absolute inset-0" /> */}
            <span className="text-xl font bold">{receta.name}</span>
            <div className="flex flex-wrap">
              {receta.ingredients.map((ing, index) => (
                  <span key={ing + index } className="bg-slate-200 m-1 px-1 rounded-md">
                    {ing}
                  </span>
              ))}
            </div>
          </h3>
          <p className="mt-1 text-sm text-gray-800">
            {receta.time} | {receta.difficulty}{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default RecipeCard;
