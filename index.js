const RANDOM_DOG_URL = "https://dog.ceo/api/breeds/image/random";

const fotoPerretes = document.querySelector(".perretes");

//EJEMPLO DE LA FUNCIÓN: dogPromise.then(func1).then(func2).then(func3).then(func4);
function onClick() {
  const dogPromise = fetch(RANDOM_DOG_URL);
  dogPromise.then(response => response.json()).then(function(json) {
    console.log(json);
    console.log(json.message);
    const img = document.createElement("img");
    img.src = json.message;
    img.alt = "Perrito Lindo";

    fotoPerretes.appendChild(img);
  });
}
document.querySelector(".add-perretes").addEventListener("click", onClick);
