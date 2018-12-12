module.exports = fetchData = async uri => {
  fetch(uri)
    .then(data => {
      return data.json();
    })
    .then(resp => {
      return resp;
    });
};
