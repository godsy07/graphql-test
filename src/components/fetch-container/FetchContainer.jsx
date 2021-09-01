import React from "react";
import { gql, useQuery } from "@apollo/client";

const GET_DATA = gql`
  {
    continents {
      name
      countries {
        code
      }
    }
  }
`;

const FetchContainer = () => {
  const { loading, error, data } = useQuery(GET_DATA);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  console.log(data);

  return (
    <div className='bg-gray-300 m-8 p-2 w-full h-full rounded-xl justify-center text-center'>
      <h1 className='text-5xl font-bold mb-10'>Continent List</h1>
      <div className='grid grid-cols-3 gap-3 w-full h-full'>
        {data.continents.map((continent, index) => (
          <div key={index} className='bg-red-400 h-36 rounded-xl'>
            <h1 className='text-3xl uppercase italic font-bold'>
              {continent.name}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FetchContainer;
