import getPokemon from './api.js';
// import commentApis from './commentApi.js';

// const addMoreComments = (ul, arr) => {
//   arr.forEach((el) => {
//     ul.innerHTML += `<li class="comment-list">${el.creation_date} ${el.username}: ${el.comment}</li>`;
//   });
// };

export default async function openCommentPage(pokeId) {
  const pokemonInfo = await getPokemon(pokeId);
  // const commentsInfo = await commentApis(pokeId);
  const popScreen = document.getElementById('comment-display');
  popScreen.classList.add('popup');

  popScreen.innerHTML = `
  <div class="central-popup">
  <div class="popup-items">
    <img
      src="${pokemonInfo.image}"
      alt="shows"
      class="popup-image"
    />
    <button class="close">&times;</button>
  </div>
  <div class = "pokemon-container">
  <h3 class="popup-title">${pokemonInfo.name}</h3>
  <div class="popup-info">
    <div class="pokemon-stats">
      <h5>Nature : ${pokemonInfo.nature}</h5>
      <h5>Ability : ${pokemonInfo.abitlty}</h5>
    </div>
  </div>
  <h4 class="comments-title">Comments</h4>
   <ul class="comments-list" id='list-group'>
    <p>my hero : pokemon guy</p>
  </ul>
  </div>
</div>
    `;
  // const ul = document.getElementById('list-group');
  // addMoreComments(ul);

  const closeButton = document.querySelector('.close');
  closeButton.addEventListener('click', () => popScreen.classList.remove('popup'));
}
