const baseUrl = 'https://pokeapi.co/api/v2';
const involveBase = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';
const appId = 'CASRWGSYrSseBvOI0M1L';

const getPokemon = async (pokeId) => {
  const url = `${baseUrl}/pokemon/${pokeId}`;
  let pokemon = await fetch(url);
  pokemon = await pokemon.json();
  return pokemon;
};

const getComments = async (pokeId) => {
  const url = `${involveBase}/${appId}/comments?item_id=${pokeId}`;
  let comments = await fetch(url);
  comments = await comments.json();
  return comments;
};

export default { getPokemon, getComments };