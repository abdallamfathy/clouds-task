import React from "react";

interface RecipeCardProps {
  searchTerm: string;
  data:
    | {
        recipe: {
          label: string;
          image: string;
          url: string;
          source: string;
        };
      }[]
    | undefined;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ searchTerm, data }) => {

  return (
    <div className="flex flex-wrap  2xl:gap-y-28 gap-y-20 gap-10 lg:gap-14 lg:gap-y-20 ">
      {searchTerm &&
        data?.map((recipe, index) => (
          <div key={index} className="flex flex-col gap-2 h-48  xl:w-[16rem]  lg:w-48 md:w-44 text-sm font-semibold">
            <img src={recipe.recipe.image} alt="recipe-img" className="rounded-md h-full w-full object-cover" loading="lazy" />
            <h1>{recipe.recipe.label}</h1>
            <p>{recipe.recipe.source}</p>
          </div>
        ))}
    </div>
  );
};

export default RecipeCard;
