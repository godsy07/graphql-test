import React from "react";
import { gql, useQuery } from "@apollo/client";

import "./pokemon-container.styles.css";

const GET_DOGS = gql`
  query samplePokeAPIquery {
    gen3_species: pokemon_v2_pokemonspecies(where: {}) {
      name
      id
    }
  }
`;

const PokemonContainer = () => {
  const { loading, error, data } = useQuery(GET_DOGS);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  console.log(data);
  return (
    <div className='bg-gray-300 m-8 p-2 w-full rounded-xl justify-center text-center'>
      <h1 className=''>Pokemon List</h1>
    </div>
  );
};

export default PokemonContainer;
