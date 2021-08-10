import { newElem, newDiv, grab } from './support.js';

class PokemonContainer {
  constructor(pokemonImage, pokemonName, pokemonLikes, pokemonId) {
    this.pokemonImage = pokemonImage;
    this.pokemonName = pokemonName;
    this.pokemonLikes = `${pokemonLikes} Likes`;
    this.pokemonId = pokemonId;
  }

  display() {
    const PokeDisplay = grab('Pokemon-display');
    const container = newDiv;
    container.classList.add('grid-container');

    const pokemonImg = newElem('img');
    pokemonImg.src = this.pokemonImage;
    pokemonImg.classList.add('');

    const pokemonName = newElem('p');
    pokemonName.classList.add('m-bot-1');
    pokemonName.innerText = this.pokemonName;
    const numLikes = newElem('p');
    numLikes.classList.add('m-bot-1');
    numLikes.innerText = this.pokemonLikes;

    const likeButton = newElem('i');
    likeButton.classList.add('far', 'fa-heart');

    const infoDiv = newDiv;
    infoDiv.classList.add('flex', 'info-div-align');
    infoDiv.append(pokemonName, likeButton);
    const commentButton = newElem('button');
    commentButton.classList.add('m-top-1');
    commentButton.innerText = 'Comment';

    container.append(pokemonImg, infoDiv, numLikes, commentButton);
    PokeDisplay.append(container);
  }
}

const displayPokemon = (pokes) => {
  pokes.forEach((poke) => {
    const pokemonContainer = new PokemonContainer(
      poke.image.original,
      poke.name,
      0,
      poke.id,
    );
    pokemonContainer.display();
  });
};

export default { displayPokemon };