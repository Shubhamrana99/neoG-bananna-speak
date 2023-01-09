const btnTranslate = document.querySelector("#btnTranslate");
const input = document.querySelector("#input");
const output = document.querySelector("#output");

// var serverUrl = "https://lessonfourapi.tanaypratap.repl.co/translat/yoda.json";
var serverUrl = "https://api.funtranslations.com/translate/minion.json"


function getTranslationUrl(text) {
  return serverUrl + "?" + "text=" + text;
}

const handleErr = () => {
  output.innerText = "Something went wrong with the server or Too Many Requests, Try after sometime";
}

const btnClick = () => {
  var inputText = input.value;
  fetch(getTranslationUrl(inputText))
    .then((response) => {
      return response.json();
    })
    .then((jsonData) => {
      output.innerText = jsonData.contents.translated;
    })
    .catch(handleErr);
}

btnTranslate.addEventListener("click", btnClick)







