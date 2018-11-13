module.exports = fetchData = uri => {
  fetch(uri)
    .then(data => {
      return data.json();
    })
    .then(resp => {
      return resp;
    });
};
