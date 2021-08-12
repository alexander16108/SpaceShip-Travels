const involveBase = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';
// const appId = 'CASRWGSYrSseBvOI0M1L';

// const pokemonLove = async (pokemonId) => {
//   const appId = 'CASRWGSYrSseBvOI0M1L';
//   const response = await fetch(`${involveBase}/apps/${appId}/likes`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       'Access-Control-Allow-Origin': 'http://localhost:8080/',
//     },
//     body: JSON.stringify({
//       item_id: pokemonId,
//     }),
//   });
//   const { status } = response;
//   return status;
// };

const fetchLove = async () => {
  const appId = 'CASRWGSYrSseBvOI0M1L';
  const response = await fetch(`${involveBase}/apps/${appId}/likes`);
  let likes = await response.text();
  if (likes.length === 0) likes = '[]';
  return JSON.parse(`{"likes": ${likes}}`);
};

export default fetchLove;