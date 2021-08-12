import { fetchLove, pokemonLove } from './likeAPI.js';
import { newElem, newDiv, grab } from './support.js';
import openCommentPage from './commentPop.js';

class PokemonContainer {
  constructor(pokemonImage, pokemonName, pokemonLikes, pokemonId) {
    this.pokemonImage = pokemonImage;
    this.pokemonName = pokemonName;
    this.pokemonLikes = pokemonLikes;
    this.updateLikes = this.updateLikes.bind(this);
    this.updateLikes.numLikesDisplay = null;
    this.pokemonId = pokemonId;
  }

  updateLikes() {
    this.numLikesDisplay.innerText = this.pokemonLikes === 1 ? `${this.pokemonLikes} Like` : `${this.pokemonLikes} Likes`;
  }

  display() {
    const pokeDisplay = grab('Pokemon-display');
    pokeDisplay.classList.add('grid-container');

    const container = newDiv();
    container.classList.add('grid-item');

    const pokemonImg = newElem('img');
    pokemonImg.classList.add('pokemon-img');
    pokemonImg.src = this.pokemonImage;

    const pokemonName = newElem('p');
    pokemonName.classList.add('m-bot-5', 'name-txt');
    pokemonName.innerText = this.pokemonName.toUpperCase();
    const numLikes = newElem('p');
    numLikes.classList.add('m-bot-5');
    numLikes.innerText = this.pokemonLikes;

    this.numLikesDisplay = numLikes;

    const likeBtn = newElem('i');
    likeBtn.classList.add('far', 'fa-heart');

    likeBtn.addEventListener('click', async () => {
      const status = await pokemonLove(this.pokemonId);
      if (status === 201) {
        this.pokemonLikes += 1;
        this.updateLikes();
      }
    });

    const infoDiv = newDiv();
    infoDiv.classList.add('flex', 'info-div-align');
    infoDiv.append(likeBtn, numLikes);

    const commentButton = newElem('button');
    commentButton.classList.add('m-top-5', 'm-bot-5', 'coment-btn');
    commentButton.innerText = 'Comment';


    commentButton.addEventListener('click', () => openCommentPage(this.pokemonId));

    container.append(pokemonImg, pokemonName, infoDiv, commentButton);
    pokeDisplay.append(container);

    this.updateLikes();
  }
}

const displayPokemon = async (pokemon) => {
  const result = await fetchLove();
  pokemon.forEach((poke) => {
    let numLikes = 0;
    numLikes = (result.likes.find((item) => item.item_id === poke.id)
      ? result.likes.find((item) => item.item_id === poke.id).likes : 0);
    const pokemonContainer = new PokemonContainer(
      poke.sprites.other.dream_world.front_default,
      poke.name,
      numLikes,
      poke.id,
    );
    pokemonContainer.display();
  });
};

export default displayPokemon;