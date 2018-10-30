start();

function start() {
  document.querySelector(".add-perretes").addEventListener("click", onClick);
}

function onClick() {
  const randomDogUrl = "https://dog.ceo/api/breeds/image/random";
  fetch(randomDogUrl)
    .then(function(response) {
      return response.json();
    })
    .then(function(response2) {
      const img = document.createElement("img");
      img.alt = "Un Lindo Perrito";
      img.src = response2.message;
      document.querySelector(".perretes").appendChild(img);
    });
}
