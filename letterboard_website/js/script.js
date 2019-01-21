var wordArray = [];
var currentWord = "";
var nextWord = "";
var wordIndex = 0;


function addItem(){
    var ul = document.getElementById("word-list");
    var input = document.getElementById("input");
    var li = document.createElement("li");
    
    wordArray.push(input.value);
    console.log(wordArray)
    
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    
    input.value = null; //refreshes the input box
    
    input.addEventListener("keyup", function(event) {
        event.preventDefault();
        if (event.keyCode == 13) {
            document.getElementById("button").click();
        }
    });
    
    var listNum = document.getElementById("word-list").getElementsByTagName("li").length;
    if (listNum == 7 || listNum == 13 || listNum == 19){
        li.style.paddingTop = "10px"; 
    }
    
    var words = document.getElementById("word-list").getElementsByTagName('li');

    for (var i=0; i<words.length; i++) {
        words[i].addEventListener('click', displayWords, false);
        words[i].addEventListener('click', colorWords, false);
        words[i].addEventListener('click', initializeWord, false);
    }
}

function displayWords() { //display current and next word on the right side as well as on the top of the letterboard
    
    repositionBox(touchedArray.length-1);
    
    wordIndex = 0;
    
    var letterBoxes = document.getElementById("real-time").getElementsByClassName("box");
    
    for(var i=0; i<touchedArray.length; i++){
        letterBoxes[i].removeChild(letterBoxes[i].childNodes[0]);
        letterBoxes[i].style.backgroundColor = "#F6F8F8";
        if(i == touchedArray.length-1){
            letterBoxes[i+1].style.backgroundColor = "#F6F8F8";
        }
    }
    
    var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    
    for(var i=0; i<letters.length; i++){
        var box = document.getElementById(letters[i]);
        box.style.backgroundColor = "#F6F8F8";
        box.style.color = "#808285";
    }
            
        
    touchedArray = [];
    
    currentWord = this.innerHTML;
    var currentWordUpperCase = currentWord.toUpperCase();
    var currentWordPos = wordArray.indexOf(currentWord);
    var nextWordPos = currentWordPos + 1;
    var nextWord = wordArray[nextWordPos];
    
    document.getElementById("current-word").innerHTML = currentWordUpperCase;
    document.getElementById("larger-current-word").innerHTML = currentWordUpperCase;

    var compare = currentWordPos + 1;
    
    if (compare == wordArray.length){
        document.getElementById("next-word").innerHTML = "NONE";
    }else{
        document.getElementById("next-word").innerHTML = nextWord.toUpperCase();
    }
}

function colorWords(){ //changes color attribute to the word on the list when clicked
    var currentWord = this;
    var list = document.getElementById("word-list").getElementsByTagName("li");
    for (var i=0; i<list.length; i++) {   
        list[i].style.color = "#808285";
    }
    currentWord.style.color = "#D32D44";
}


