import './scss/style.scss';
import photo from './images/pixel.gif';

function imageComponent() {
  const element = document.createElement('div');

  // Add the image to our existing div.
  const myPhoto = new Image();
  myPhoto.src = photo;

  element.appendChild(myPhoto);

  return element;
}

function textComponent(text) {
  const element = document.createElement('h1');

  const t = document.createTextNode(text);

  element.appendChild(t);

  return element;
}

document.body.appendChild(textComponent('Webpack!!'));
document.body.appendChild(imageComponent());
