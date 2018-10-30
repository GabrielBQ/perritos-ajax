start();

function start() {
  document.querySelector(".add-perretes").addEventListener("click", onClick);
}

function onClick() {
  const randomDogUrl = "https://dog.ceo/api/breeds/image/random";

  fetch(randomDogUrl)
    .then(toJson)

    .then(function(jsonResponse) {
      const img = imgToDOM(jsonResponse.message);
      document.querySelector(".perretes").appendChild(img);
    });
}

function toJson(apiResponse) {
  return apiResponse.json();
}

function imgToDOM(dogUrl) {
  const img = document.createElement("img");
  img.alt = "Un Lindo Perrito";
  img.src = dogUrl;
  return img;
}
