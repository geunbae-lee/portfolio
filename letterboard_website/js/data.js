//var API_endPoint = "http://"+"172.20.10.3"+":"+"5000/data"+""
//var API_endPoint = "http://"+"128.61.26.187"+":"+"5000/data"+""
var API_endPoint = "http://"+"192.168.1.115"+":"+"5000/data"+""

function tick() {
    $.getJSON(API_endPoint, function( data ) {

        var touchedLetter = data['touch'];
        touchedLetter = touchedLetter.toLowerCase();
        if(touchedLetter != "-1"){
            touchedArray.push(touchedLetter);
            highlightLetterboardBox(touchedLetter);
            highlightTouchedBox(touchedLetter);
        }
        
    });
    setTimeout(tick, 300);
}

tick()

var touchedArray = [];
var touchedLetter = "";



//COMMENTED OUT BECAUSE I MANUALLY CREATED BOXES

//window.onload = function() { // generate 30 boxes horizontally when window is loaded
//    var toAdd = document.createDocumentFragment(); 
//    var boxNum = 30;
//    for(var i=0; i < boxNum; i++){
//       var newDiv = document.createElement('div');
//       newDiv.className = 'box';
//       toAdd.appendChild(newDiv); //window onload, create 30 divs that will show the touched letters
//    }
//    
//    document.getElementById("real-time").appendChild(toAdd);
//}


function initializeWord(){
    var currentWord = document.getElementById("current-word");
    console.log(currentWord);
}


function highlightLetterboardBox(touchedLetter){ //highlight real-time touched box to orange
    var box = document.getElementById(touchedLetter);
    console.log(touchedLetter);
        
    box.style.backgroundColor = "#FFA04C";
    box.style.color = "#fff";
    
    if(touchedArray.length > 1 && touchedArray[touchedArray.length - 1] != touchedArray[touchedArray.length - 2]){
        var oldBox = document.getElementById(touchedArray[touchedArray.length - 2]);
        oldBox.style.backgroundColor = "#F6F8F8";
        oldBox.style.color = "#808285";
    }
}

function highlightTouchedBox(touchedLetter){
    var greenColor = "#46C4B6";
    var redColor = "#D32D44";
    var bgColor;
    var letterBoxes = document.getElementById("real-time").getElementsByClassName("box");
    
    var i = touchedArray.length-1;
    
    if (touchedLetter.toUpperCase() == currentWord.toUpperCase().charAt(wordIndex)){
        wordIndex++;
        bgColor = greenColor;
    }
    else{
        bgColor = redColor;
    }

    var p = document.createElement("p");
    letterBoxes[i].style.backgroundColor = bgColor;
    letterBoxes[i].appendChild(p).innerHTML = touchedArray[i]
    letterBoxes[i].appendChild(p).style.width = "52px";
    letterBoxes[i].appendChild(p).style.height = "52px";
    letterBoxes[i].appendChild(p).style.position = "absolute";
    letterBoxes[i].appendChild(p).style.lineHeight = "52px";
    letterBoxes[i].appendChild(p).style.fontFamily = "Avenir";
    letterBoxes[i].appendChild(p).style.textTransform = "uppercase";

    letterBoxes[touchedArray.length].style.backgroundColor = "#CED0D4";
    
    slideBox(i);
}

function slideBox(boxIndex){
    console.log(boxIndex)
    var boxContainer = document.getElementById("real-time")
    if(boxIndex>0 && boxIndex % 8 == 0){
        boxContainer.scrollLeft = 460 * (boxIndex/8);
    }
}

function repositionBox(boxIndex){
    console.log(boxIndex)
    var boxContainer = document.getElementById("real-time")
    boxContainer.scrollLeft = 0;
}

