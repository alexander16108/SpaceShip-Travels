const involveBase = 'https://us-central1-involvement-api.cloudfunctions.netcapstoneApi/';
const appId = 'CASRWGSYrSseBvOI0M1L';

const commentApis = async (pokeId) => {
  const url = `${involveBase}/${appId}/comments?item_id=${pokeId}`;
  let comments = await fetch(url);
  comments = await comments.json();
  return comments;
};

export default commentApis;