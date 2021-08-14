const involveBase = 'https://us-central1-involvement-api.cloudfunctions.netcapstoneApi/';
const appId = 'CASRWGSYrSseBvOI0M1L';

const commentAPIs= async (pokemonId) => {
  const url = `${involveBase}/${appId}/comments?item_id=${pokemonId}`;
  let comments = await fetch(url);
  comments = await comments.json();
  return comments;
};

const postComment = async (pokemonId, name, insight) => {
  const url = `${involveBase}/${appId}/comments`;
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: `${pokemonId}`,
      username: name,
      comment: insight,
    }),
  });
  return response.json();
};
export { commentAPIs, postComment };