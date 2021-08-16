const baseUrl = 'https://pokeapi.co/api/v2';

const getPokemon = async (pokeId) => {
  const url = `${baseUrl}/pokemon/${pokeId}`;
  let pokemon = await fetch(url);
  pokemon = await pokemon.json();
  return pokemon;
};

export default getPokemon;
