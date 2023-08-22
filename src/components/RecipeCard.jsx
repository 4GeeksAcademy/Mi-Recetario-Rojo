// eslint-disable-next-line no-unused-vars
import React from "react";

const RecipeCard = ({ receta }) => {
  return (
    <>
      <div className="w-1/2 px-4 py-10">
        <img
          src={receta.imageSrc}
          alt={receta.imageAlt}
          className="w-full object-cover object-center  aspect-square lg:h-full lg:w-full rounded-md"
        />
        <div className="">
          <h3 className="text-md text-gray-700">
            {/* <span aria-hidden="true" className="absolute inset-0" /> */}
            <span className="text-2xl font-bold">{receta.name}</span>
            <div className="flex flex-wrap space-x-2">
              { <i className="fa-solid fa-drumstick-bite text-amber-600"></i> }
              { <i className="fa-solid fa-seedling text-green-500"></i> }
              { <i className="fa-solid fa-pepper-hot text-red-500"></i> }
              { <i className="fa-solid fa-fish text-blue-500"></i> }
            </div>
          <p className="mt-1 text-sm text-gray-800">
            <i className="fa-solid fa-stopwatch text-gray-400"></i> {receta.time} | <i className="fa-solid fa-kitchen-set"></i> {receta.difficulty}{" "}
          </p>
          </h3>
        </div>
      </div>
    </>
  );
};

export default RecipeCard;
