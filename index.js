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
      //TO DO: create a function: createLabel
      console.log(breeds);
      const label = document.createElement("label");
      label.htmlFor = "breed-select";
      label.innerText = "🐶 Escoge una Raza 🐶 ";
      document.querySelector(".breed-container").appendChild(label);
      const select = document.createElement("select");
      select.id = "breed-select";
      document.querySelector(".breed-container").appendChild(select);
      const option = document.createElement("option");
      option.value = "";
      option.innerText = "🐺Coge una Raza🐺";
      document.querySelector("#breed-select").appendChild(option);
    });
  /*<label for="breed-select">🐶 Escoge una Raza 🐶 </label>
    <p></p><select class="breeds-select">
      <option value="affenpinscher">affenpinscher</option>
      <option value="african">african</option>
      <option value="airedale">airedale</option>
    </select>*/
}
s;

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
