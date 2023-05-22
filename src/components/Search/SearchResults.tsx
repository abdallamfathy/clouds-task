import { Link } from "react-router-dom";


import React from 'react'

const SearchResults = ({ searchTerm, data, show }) => {
    return (
      <div
        className={` z-50 w-[32rem] absolute cursor-pointer rounded-b-md mr-5 overflow-y-scroll h-72 ${
          searchTerm === "" && "hidden"
        } ${!show && "hidden"}  bg-opacity-100  bg-gray-50`}>
        {data?.map((item) => {
          return (
            <Link to={`shop/${item.id}`} key={item.id}>
              <p className="px-4 py-3 w-full   text-secondary hover:bg-gray-100">
                {item.title}
              </p>
            </Link>
          );
        })}
      </div>
    );
}

export default SearchResults