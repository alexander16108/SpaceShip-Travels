const baseUrl = 'https://pokeapi.co/api/v2';

const getPokemon = async (pokemonId) => {
  const url = `${baseUrl}/pokemon/${pokemonId}`;
  let pokemon = await fetch(url);
  pokemon = await pokemon.json();
  return pokemon;
};

export default getPokemon;
