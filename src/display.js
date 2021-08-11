import { newElem, newDiv, grab } from './support.js';

class PokemonContainer {
  constructor(pokemonImage, pokemonName, pokemonLikes, pokemonId) {
    this.pokemonImage = pokemonImage;
    this.pokemonName = pokemonName;
    this.pokemonLikes = `${pokemonLikes} Likes`;
    this.pokemonId = pokemonId;
  }

  display() {
    const pokeDisplay = grab('Pokemon-display');
    pokeDisplay.classList.add('grid-container');

    const container = newDiv();
    container.classList.add('grid-item');

    const pokemonImg = newElem('img');
    pokemonImg.src = this.pokemonImage;
    pokemonImg.classList.add('pokemon-img');

    const pokemonName = newElem('p');
    pokemonName.classList.add('m-bot-5', 'name-txt');
    pokemonName.innerText = this.pokemonName.toUpperCase();
    const numLikes = newElem('p');
    numLikes.classList.add('m-bot-5');
    numLikes.innerText = this.pokemonLikes;

    const likeButton = newElem('i');
    likeButton.classList.add('far', 'fa-heart');

    const infoDiv = newDiv();
    infoDiv.classList.add('flex', 'info-div-align');
    infoDiv.append(likeButton, numLikes);
    const commentButton = newElem('button');
    commentButton.classList.add('m-top-5', 'm-bot-5', 'coment-btn');
    commentButton.innerText = 'Comment';

    container.append(pokemonImg, pokemonName, infoDiv, commentButton);
    pokeDisplay.append(container);
  }
}

const displayPokemon = (pokemon) => {
  pokemon.forEach((pokes) => {
    const pokemonContainer = new PokemonContainer(
      pokes.sprites.other.dream_world.front_default,
      pokes.name,
      0,
      pokes.id,
    );
    pokemonContainer.display();
  });
};

export default displayPokemon;