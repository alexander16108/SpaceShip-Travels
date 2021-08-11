const baseUrl = 'https://pokeapi.co/api/v2/';
// const involveBase = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';
// const appId = 'CASRWGSYrSseBvOI0M1L';

const getPokemon = async (pokeId) => {
  const url = `${baseUrl}/pokemon/${pokeId}`;
  let pokemon = await fetch(url);
  pokemon = await pokemon.json();
  returnpoke mon;
};

export default { getPokemon };