import PokemonContainer from "../src/components/pokemon-container/PokemonContainer";

const App = () => {
  return (
    <div className='flex min-h-screen w-full justify-center bg-gradient-to-br from-green-600 via-blue-500 to-purple-600'>
      <PokemonContainer />
    </div>
  );
};

export default App;
