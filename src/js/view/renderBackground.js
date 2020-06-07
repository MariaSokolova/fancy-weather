export const renderImage = (imgUrl) => {
  const background = document.getElementById('bg');
  background.setAttribute ('style', `background:url('${imgUrl}') center no-repeat; background-size: cover;`);
};
