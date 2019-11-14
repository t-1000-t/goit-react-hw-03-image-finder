const fetchArticles = query => {
  return fetch(
    `https://pixabay.com/api/?key=14147963-1172996dfbc4032cf6219bd1a&q=${query}&image_type=photo&pretty=true`,
  )
    .then(res => res.json())
    .then(data => data.hits);
};

export default { fetchArticles };
