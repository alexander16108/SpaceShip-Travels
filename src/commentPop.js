import getPokemon from './api.js';
import { commentApis, postComment } from './commentApi.js';

const addMoreComments = (ul, arr) => {
  arr.forEach((el) => {
    ul.innerHTML += `<li class="comment-list">
${el.creation_date}
 ${el.username}: ${el.comment}</li>`;
  });
};

export const openCommentPage = async (pokemonId) => {
  const pokemonInfo = await getPokemon(pokemonId);
  const commentsInfo = await commentApis(pokemonId);
  const popScreen = document.getElementById('comment-display');
  popScreen.classList.add('open-popup');
  // popScreen.style.display = 'block';

  popScreen.innerHTML = `
  <div class="central-popup">
  <div class="popup-items">
    <img
      src="${pokemonInfo.sprites.other.dream_world.front_default}"
      alt="shows"
      class="popup-image"
    />
    <button class="close">&times;</button>
  </div>
  <div class = "pokemon-container">
  <h3 class="popup-title">${pokemonInfo.name}</h3>
  <div class="popup-info">
    <div class="pokemon-stats">
      <h5> Weight : ${pokemonInfo.weight}</h5>
      <h5> Height : ${pokemonInfo.height}</h5>
    </div>
  </div>
  <h4 class="comments-title">Comments</h4>
   <ul class="comments-list" id='list-group'></ul>
  <form class="form" action="#">
  <input
      type="text"
      id="name"
      name="name"
      placeholder="Your name"
  /><br />
  <textarea
      type="text"
      id="insight"
      name="insight"
      placeholder="Your insights"
      rows="4" 
      cols="50"
  ></textarea><br />
  <input type="submit" id="submit-btn" value="Comment" />
</form>
  </div>
</div>
    `;
  const ul = document.getElementById('list-group');
  addMoreComments(ul, commentsInfo);

  const closeButton = document.getElementsByClassName('close')[0];
  closeButton.addEventListener('click', () => {
    popScreen.classList.add('close-popup');
  });
  const name = document.querySelector('#name');
  const insight = document.querySelector('#insight');
  const form = document.querySelector('form');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    postComment(pokemonId, name.value, insight.value);
    addItemToList(ul, [
      {
        creation_date: '2021-08-14',
        username: name.value,
        comment: insight.value,
      },
    ]);

    name.value = '';
    insight.value = '';
  });
}
