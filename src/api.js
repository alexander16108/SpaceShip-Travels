const baseUrl = 'https://pokeapi.co/api/v2/';

const getPokemon = async (pokeName) => {
  const url = `${baseUrl}/pokemon/${pokeName}`;
  let pokemon = await fetch(url);
  pokemon = await pokemon.json();
  return pokemon;
};

export default { getPokemon };