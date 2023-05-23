import React from 'react';

const RecipeCardSkeleton: React.FC = () => {
    return (
        <div className="animate-pulse flex space-x-4">
            {/* <div className="rounded-md bg-gray-300 h-12 w-12"></div>
            <div className="flex-1 space-y-2 py-1">
                <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                <div className="space-y-2">
                    <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                    <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                </div>
            </div> */}
            <div  className="flex flex-col gap-2 md:h-48 h-44 xl:w-[16rem]  lg:w-48 md:w-44 w-36  text-sm font-bold">
            <div className="rounded-md h-full w-full object-cover bg-gray-300" ></div>
            <div className="h-7 bg-gray-300 rounded w-5/6"></div>
            <div className="h-7 bg-gray-300 rounded w-1/2"></div>
          </div>
        </div>
    );
};

export default RecipeCardSkeleton;
