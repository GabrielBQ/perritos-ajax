//Nombramos la URL de la página para poder usarla más facilmente
const RANDOM_DOG_URL = "https://dog.ceo/api/breeds/image/random";

//fetch recibe un String (la URL en este caso) y  nos devuelve una promesa(el return de .then)
const dogPromise = fetch(RANDOM_DOG_URL);

//then es una función(que recibe una función) que te permite acceder a  una promesa (hace una llamada a AJAX para poder recibir DESPUÉS la imagen)
dogPromise
  .then(function(apiResponse) {
    //.json no recibe nada y nos devuelve una promesa ( es un objeto de JavaScript)
    return apiResponse.json();
  })
  .then(function(jsonResponse) {
    console.log(jsonResponse);
  });
