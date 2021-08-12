import { getComments, getPokemon } from './api.js';

const addItemToList = (ul, arr) => {
  arr.forEach((el) => {
    ul.innerHTML += `<li class="comment-list-item my-1">${el.creation_date} ${el.username}: ${el.comment}</li>`;
  });
};

export default async function gotoCommentPage(pokeId) {
  const pokeInfo = await getPokemon(pokeId);
  const commentsInfo = await getComments(pokeId);
  const modal = document.querySelector('.modal');
  modal.classList.add('active');

  modal.innerHTML = `
  <div
          class="
            modal-content
            d-flex
            flex-column
            align-items-center
            justify-content-center
          "
        >
          <div class="d-flex flex-row w-100 justify-content-center">
            <img
              src="${pokeInfo.image.medium}"
              alt="shows"
              class="popup-image"
            />
            <div class="close">&times;</div>
          </div>
          <h3 class="popup-title my-4">${pokeInfo.name}</h3>
          <div class="info d-flex flex-row my-2 w-75">
            <div class="categories d-flex flex-column align-items-start w-50">
              <h5>Genre : ${pokeInfo.powers[0]}</h5>
              <h5>Language : ${pokeInfo.weakeness}</h5>
            </div>

          </div>
          <h4 class="comments-title my-2">Comments</h4>
          <ul class="comments-list list-group list-unstyled"></ul>
          <h5 class="add-comment my-4">Add a comment</h5>
          <form class="d-flex flex-column align-items-start" action="#">
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
  `;
  const ul = document.querySelector('.comments-list');
  addItemToList(ul, commentsInfo);

  const closeButton = document.querySelector('.close');
  closeButton.addEventListener('click', () => modal.classList.remove('active'));
}