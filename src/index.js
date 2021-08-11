// eslint-disable-next-line no-unused-vars
import _ from 'lodash';
import './style.css';
import Logo from './pokeLogo.png';
import { newElem, grab } from './support.js';
import getPokemon from './api.js';
import displayPokemon from './display.js';

const populate = () => {
  // logo
  const logoDiv = grab('logo-div');
  const logo = new Image();
  logo.id = 'logoImg';
  logo.src = Logo;

  logoDiv.append(logo);

  // nav-list
  const navLi = grab('nav-list');
  navLi.classList.add('list-style');

  const li1 = newElem('li');
  li1.innerText = 'Pokemon';
  li1.classList.add('nav-list-txt');

  const li2 = newElem('li');
  li2.innerText = 'Comments';
  li2.classList.add('nav-list-txt');

  navLi.append(li1, li2);

  // footer

  const foot = grab('foot-anchor');
  foot.classList.add('footer');

  const footLi = newElem('ul');
  footLi.classList.add('flex', 'list-style', 'footerText');

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

const pokemon = [];

document.addEventListener('DOMContentLoaded', populate, async () => {
  pokemon.push(
    await getPokemon(6),
    await getPokemon(7),
    await getPokemon(25),
    await getPokemon(52),
    await getPokemon(79),
    await getPokemon(95),
  );
  displayPokemon(pokemon);
});

