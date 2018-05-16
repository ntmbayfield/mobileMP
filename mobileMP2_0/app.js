//declare variables
let wordList = galvanizeWordSet;
let setSize = 30;
let fontChoice = "Inconsolata";
let removed = [];


//declare functions
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

//wrote this shuffle function for lodash exercise
function shuffle(array) {
  let numbers = [];
  let unshuffledArray =[];
  //for each index in the array, generate a random number and push it to the "numbers" array
  for (let i=0; i<array.length; i++) {
    numbers.push(Math.random());
  }
  for (let i=0; i<array.length; i++) {
    let randomlyTaggedElement = [];
    randomlyTaggedElement.push(array[i]);
    randomlyTaggedElement.push(numbers[i]);
    unshuffledArray.push(randomlyTaggedElement);
  }
  let sortedArray = unshuffledArray.sort(function(a, b) {
    return a[1] - b[1];
  });
  let shuffledArray = [];
  for (let i = 0; i < sortedArray.length; i++) {
    shuffledArray.push(sortedArray[i][0]);
  }
  return shuffledArray;
}

//
function createMagnets() {
  let droppableDoor = document.querySelector("#droppableDoor");
  //for each index in the wordsArray, create a magnetDiv
  let randomizedArray = shuffle(galvanizeWordSet);
  removed = randomizedArray.splice(0, 60);
  for (let i=0; i<removed.length; i++) {
    let word=document.createElement('div');
        word.style.position = "absolute";
        word.style.zIndex = getRandomInt(0, 4);
    word.className = "draggable";
    word.style.height = "30px";
    word.style.marginBottom = "5px";
    word.style.width = ((8 * removed[i].length)+10) + "px";
    word.style.backgroundColor = "white";
    word.style.border = "solid 1px black";
    word.style.boxShadow = " 5px 5px 2px grey";
    word.setAttribute("draggable", "true");
    door.appendChild(word);

}


//utilize draggabilly library to make magnets draggable
      $(document).ready(function() {
        var draggableElems = document.querySelectorAll('.draggable');
        // array of Draggabillies
        var draggies = []
        // init Draggabillies
        for ( var i=0, len = draggableElems.length; i < len; i++ ) {
          var draggableElem = draggableElems[i];
          var draggie = new Draggabilly( draggableElem, {
            containment: true
          });
          draggies.push( draggie );
        }
      });
