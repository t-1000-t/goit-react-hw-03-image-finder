const fetchArticles = (query, pageNum) => {
  return fetch(
    `https://pixabay.com/api/?key=14147963-1172996dfbc4032cf6219bd1a&q=${query}&page=${pageNum}&image_type=photo&pretty=true`,
  )
    .then(res => res.json())
    .then(data => data.hits);
};

export default { fetchArticles };
