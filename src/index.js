// eslint-disable-next-line no-unused-vars
import _ from 'lodash';
import './style.css';
import Logo from './tools/pokeball_logo2.png';
import { newElem, grab } from './support.js';
import getPokemon from './api.js';
import { displayPokemon } from './home_screen/display.js';

const populate = () => {
  // Navbar
  const navbar = grab('nav-anchor');
  navbar.classList.add('flex');

  const logo = new Image();
  logo.id = 'logoImg';
  logo.src = Logo;

  const pokeCount = newElem('p');
  pokeCount.innerText = 'Pokemon(9)';
  pokeCount.classList.add('nav-list-txt', 'nav-l');

  const gym = newElem('p');
  gym.innerText = 'Find a Gym';
  gym.classList.add('nav-list-txt', 'nav-r');

  navbar.append(pokeCount, logo, gym);

  // footer

  const foot = grab('foot-anchor');
  foot.classList.add('footer', 'm-top-1');

  const footLi = newElem('ul');
  footLi.classList.add('flex', 'list-style', 'footerText', 'm-top-3');

  const fLi1 = newElem('li');
  const footI = newElem('i');
  footI.classList.add('far', 'fa-copyright');

  fLi1.append(footI);

  const fLi2 = newElem('li');
  fLi2.classList.add('m-left-1');
  const footerText = newElem('p');
  footerText.innerText = 'Created by Stephan and Alexander';
  footerText.classList.add('footerText');
  fLi2.append(footerText);

  footLi.append(fLi1, fLi2);
  foot.append(footLi);
};

document.addEventListener('DOMContentLoaded', populate);

const pokemon = [];

document.addEventListener('DOMContentLoaded', async () => {
  pokemon.push(
    await getPokemon(6),
    await getPokemon(448),
    await getPokemon(25),
    await getPokemon(52),
    await getPokemon(3),
    await getPokemon(473),
    await getPokemon(260),
    await getPokemon(245),
    await getPokemon(150),
  );
  displayPokemon(pokemon);
});
