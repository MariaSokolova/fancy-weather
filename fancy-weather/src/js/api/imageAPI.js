export const getImage = async () => {
  const query = `https://api.unsplash.com/search/photos?page=1&per_page=30&query=sunny,rain,cloudy&orientation=landscape&client_id=IXWfM1KqKPXoKgwV0v0ekl695muYlQy-9W5xRjFbEkQ`;
  const response = await fetch(query);
  const data = await response.json();
  const randomIndex = Math.floor(Math.random() * 30);

  return  data.results[randomIndex].urls.regular;
};


