var minhaPromisse = function() {
  return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.github.com/users/matheuskaio");
    xhr.send(null);

    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(xhr.responseText);
        } else {
          reject("Erro na requisição");
        }
      }
    };
  });
};

var resposta = minhaPromisse();
console.log(resposta);

minhaPromisse()
  .then(function(resposta) {
    console.log(resposta);
  })
  .catch(function(error) {
    console.warn(error);
  });
