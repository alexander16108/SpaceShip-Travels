import _ from 'lodash';
import './style.css';
import Logo from './pokeLogo.png';

const newElem = (elem) => document.createElement(elem);
const newDiv = () => document.createElement('div');
const grab = (elem) => document.getElementById(elem);

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

};

document.addEventListener('DOMContentLoaded', populate);