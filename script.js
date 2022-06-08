const inputText = document.querySelector('#text-input');
const memeText = document.querySelector('#meme-text');
const inputImage = document.querySelector('#meme-insert');
const memeImage = document.querySelector('#meme-image');
const memeContainer = document.querySelector('#meme-image-container');

const images = document.querySelectorAll('#imgs-memes img');

function chooseImage(e) {
  const image = e.target;
  memeImage.src = image.src;
}

images.forEach((element) => {
  const image = element;
  image.addEventListener('click', chooseImage);
});

const buttonsBorder = document.querySelectorAll('#buttons-border button');

function selectBorder(e) {
  const borderStyle = e.target.className;
  memeContainer.className = borderStyle;
}

buttonsBorder.forEach((element) => {
  const button = element;
  button.addEventListener('click', selectBorder);
});

function displayText(e) {
  memeText.innerText = e.target.value;
}

inputText.addEventListener('input', displayText);

const imageTypes = ['image/png', 'image/jpeg', 'image/gif', 'image/webp'];

function validFileType(file) {
  return imageTypes.includes(file.type);
}

function updateImage() {
  const selectedImage = inputImage.files[0];
  if (validFileType(selectedImage)) {
    memeImage.src = URL.createObjectURL(selectedImage);
  } else {
    alert('Formato de arquivo não suportado!');
  }
}

inputImage.addEventListener('change', updateImage);
