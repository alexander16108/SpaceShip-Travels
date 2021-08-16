const newElem = (elem) => document.createElement(elem);
const newDiv = () => document.createElement('div');
const grab = (elem) => document.getElementById(elem);

module.exports = { newElem, newDiv, grab };