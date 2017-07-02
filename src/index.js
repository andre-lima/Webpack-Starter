//import { createStore } from 'redux';
import './css/style.css';
import photo from './images/pixel.gif';

function imageComponent() {
  var element = document.createElement('div');

  // Add the image to our existing div.
  var myPhoto = new Image();
  myPhoto.src = photo;

  element.appendChild(myPhoto);

  return element;
}

function textComponent(text) {
  var element = document.createElement('h1');

  var t = document.createTextNode(text)

  element.appendChild(t);

  return element;
}

document.body.appendChild(textComponent("Webpack!"));
document.body.appendChild(imageComponent());