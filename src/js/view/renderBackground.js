export const renderImage = (imgUrl) => {
  const body = document.getElementById('body');
  body.setAttribute ('style', `background:url('${imgUrl}') center no-repeat; background-size: cover;`);
};
