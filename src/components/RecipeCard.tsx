import React from "react";
import RecipeCardSkeleton from "./RecipeCardSkeleton";

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
  loading: boolean;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ searchTerm, data , loading }) => {

  return (
    <div className="flex flex-wrap max-md:justify-center 2xl:gap-y-28 gap-y-20 gap-10 lg:gap-14 lg:gap-y-20 ">
      {searchTerm &&
          loading ? Array.from({ length: 12 }).map((_, index) => (
            <RecipeCardSkeleton key={index} />
          )) :  data?.map((recipe, index) => (
          <div key={index} className="flex flex-col gap-2 md:h-48 h-44 xl:w-[16rem]  lg:w-48 md:w-44 w-36  text-sm font-bold">
            <img src={recipe.recipe.image} alt="recipe-img" className="rounded-md h-full w-full object-cover" />
            <h1>{recipe.recipe.label}</h1>
            <p>{recipe.recipe.source}</p>
          </div>
        ))}
    </div>
  );
};

export default RecipeCard;
