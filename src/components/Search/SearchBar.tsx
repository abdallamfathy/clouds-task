import React, { ChangeEvent, useEffect, useState } from "react";
import { GrClose } from "react-icons/gr";
import RecipeCard from "../RecipeCard";


const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("chicken");
  const [show, setShow] = useState(true);
  const apiUrl = import.meta.env.VITE_APP_API_BASE_URL;
  const apiId = import.meta.env.VITE_APP_API_ID;
  const apiKey = import.meta.env.VITE_APP_API_KEY;
  const [myData, setMyData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // eslint-disable-next-line prefer-const
    let abortController = new AbortController();

    // fetching data
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${apiUrl}/search?q=${searchTerm}?more&app_id=${apiId}&app_key=${apiKey}`,
          { signal: abortController.signal } // signal fetch to abort if needed
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        // save fetched data in array myData
        setMyData(data.hits);
        
      } catch (error: any) {
        if (error.name === "AbortError") {
          console.log("Fetch aborted");
        } else {
          console.error("Error:", error);
          setError(error.message);
        }
      }
    };

    fetchData();

    // clean up function
    return () => {
      abortController.abort();
    };
  }, [searchTerm, apiUrl, apiId, apiKey]);

  useEffect(() => {
    console.log(myData);
  }, [myData]);


  // get the value of input when change
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="flex flex-col 2xl:gap-20 xl:gap-16 md:gap-10 ">
      <div className="bg-white  w-full  h-12 flex justify-between items-center border-b-2 border-black/50 ">
        <input
          type="search"
          placeholder="What are you looking for ?"
          value={searchTerm}
          onChange={handleChange}
          onMouseEnter={() => setShow(!show)}
          className="bg-white text-black  pl-2 py-2 w-full mx-1 text-left  focus:outline-none "
        />
        {searchTerm && <GrClose onClick={() => setSearchTerm("")} />}
      </div>
      <div>
        <RecipeCard searchTerm={searchTerm} data={myData} />
      </div>
    </div>
  );
};

export default SearchBar;
