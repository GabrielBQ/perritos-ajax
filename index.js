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
  const LIST_BREEDS_URL = "https://dog.ceo/api/breeds/list/all";

  fetch(LIST_BREEDS_URL)
    .then(toJson)

    .then(function(jsonResponse) {
      const breeds = jsonResponse.message;
      console.log(breeds);
    });
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
  const image = makeImageFrom(jsonResponse.message);
  document.querySelector(".perretes").appendChild(image);
}
