import {getImage} from "../api/imageAPI";

export const renderImage = (imgUrl) => {
  const background = document.getElementById('bg');
  background.setAttribute ('style', `background:url('${imgUrl}') center no-repeat; background-size: cover;`);
};

export const reloadImage = () => {
  const refreshButton = document.querySelector('.dashboard__refresh');
  refreshButton.addEventListener('click', changeImage);
};

const changeImage = async () => {
  startAnimation();
  const imgUrl = await getImage();
  renderImage(imgUrl);
  setTimeout(() => {
    stopAnimation()
  }, 2000);
};

const startAnimation = () => {
  const spin = document.querySelector('.spinner');
  spin.classList.add('spinner__active');
};

const stopAnimation = () => {
  const spin = document.querySelector('.spinner');
  spin.classList.remove('spinner__active');
};
