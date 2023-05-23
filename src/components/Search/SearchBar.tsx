import React, { ChangeEvent, useEffect, useState } from "react";
import { GrClose } from "react-icons/gr";
import RecipeCard from "../RecipeCard";


const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [myData, setMyData] = useState([]);
  const [recipeCount, setRecipeCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(48);
  const apiUrl = import.meta.env.VITE_APP_API_BASE_URL;
  const apiId = import.meta.env.VITE_APP_API_ID;
  const apiKey = import.meta.env.VITE_APP_API_KEY;

  useEffect(() => {
    let abortController = new AbortController();

    // fetching data
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `${apiUrl}/search?q=${searchTerm}&to=${count}&app_id=${apiId}&app_key=${apiKey}`,
          { signal: abortController.signal } // signal fetch to abort if needed
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        // save fetched data in array myData
        setMyData(data.hits);
        setRecipeCount(data.count);
        setLoading(false);
      } catch (error: any) {
        if (error.name === "AbortError") {
          // console.log("Fetch aborted");
        } else {
          // console.error("Error:", error);
        }
      }
    };

    fetchData();

    // clean up function
    return () => {
      abortController.abort();
    };
  }, [searchTerm, apiUrl, apiId, apiKey, count]);

  // increase count of fetching data
  const increaseCount = () => {
    setCount(count + 24);
  };

  // get the value of input when change
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  return (
    <div className="flex flex-col 2xl:gap-20 xl:gap-16 gap-10  ">
      <div className="bg-white  w-full  h-12 flex justify-between items-center border-b-2 border-black/50 ">
        <input
          type="search"
          placeholder="What are you looking for ?"
          value={searchTerm}
          onChange={handleChange}
          className="bg-white text-black  pl-1 py-2 w-full mx-1 text-left  focus:outline-none "
        />

        {searchTerm &&
        <div className="flex items-center ">
          <p className="md:w-32 w-28">({recipeCount} Recipes)</p>
        
        <GrClose onClick={() => setSearchTerm("")} />
        </div>
        }
      </div>
      <div id="target-element">
        <RecipeCard searchTerm={searchTerm} data={myData} loading={loading} />
        {/* <RecipeCardSkeleton/> */}
      </div>
      {
        searchTerm &&  <div className="flex justify-center lg:mt-20 mt-10 ">
        <button  className="border-2 border-black/60 px-12 rounded-md p-2 font-[500] hover:bg-black hover:text-white transition duration-300 ease-in" onClick={(e) => { e.preventDefault(), increaseCount()}}>Load More</button>
      </div>
      }
    </div>
  );
};

export default SearchBar;
