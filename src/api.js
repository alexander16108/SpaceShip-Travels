const baseUrl = 'https://pokeapi.co/api/v2/';
// const involveBase = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';
// const appId = 'CASRWGSYrSseBvOI0M1L';

const getPokemon = async (pokeName) => {
  const url = `${baseUrl}/pokemon/${pokeName}`;
  let pokemon = await fetch(url);
  pokemon = await pokemon.json();
  return pokemon;
};

export default { getPokemon };