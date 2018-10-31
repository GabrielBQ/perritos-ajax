start();

function start() {
  document.querySelector(".add-perretes").addEventListener("click", onClick);
  document.querySelector(".add-razas").addEventListener("click", onClickBreeds);
}

function onClick() {
  const randomDogUrl = "https://dog.ceo/api/breeds/image/random";

  fetch(randomDogUrl)
    .then(toJson)

    .then(toJsonResponse);
}

function onClickBreeds(_event) {
  console.log(_event);
}

function toJson(apiResponse) {
  return apiResponse.json();
}

function makeImageFrom(dogUrl) {
  const img = document.createElement("img");
  img.alt = "Un Lindo Perrito";
  img.src = dogUrl;
  return img;
}

function toJsonResponse(jsonResponse) {
  const img = makeImageFrom(jsonResponse.message);
  document.querySelector(".perretes").appendChild(img);
}
