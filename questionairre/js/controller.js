window.addEventListener("load", bindEvents);
var score=0; 

function bindEvents() {
    NextQuestion(0);
 document.getElementById("sub").addEventListener("click", submit);
    document.getElementById("next").addEventListener("click", nextQue);
}
var itemNumber = 0;

function NextQuestion(direction) {
    itemNumber += direction;
    if (itemNumber >= questions.length) {
        alert('End of questions');
        document.getElementById("scr").innerHTML=" Score is " + score +" Out of "+ questions.length;
        return;
    }
    if (itemNumber < 0) {
        itemNumber = 0;
    }
    if (itemNumber > questions.length) {
        itemNumber = questions.length;

    }
    var question = questions[itemNumber].question;
    document.getElementById('que').innerHTML = question;
    var obj = questions[itemNumber].choices;
    for (key in obj) {

        var radioEle = document.createElement("input");
        radioEle.type = "radio";
        radioEle.value = obj[key];
        radioEle.name = "name";
        radioEle.id = "rad";
        var contain = document.getElementById("queadd")
        contain.appendChild(radioEle);
        var label = document.createElement("Label");
        label.innerHTML = obj[key];
        contain.appendChild(label);
        contain.appendChild(document.createElement("br"));

    }

}
var index = 0;

function nextQue() {
    document.getElementById("sub").disabled = false;
    document.getElementById("res").innerHTML = "";
    if (itemNumber < questions.length - 1) {
        document.getElementById("queadd").innerHTML = "";

    }
     index++;
    NextQuestion(1);
}

function resT(i) {
    var val = document.getElementsByName("name")[i].value;
    if (val === questions[index].answer) {
        document.getElementById("res").innerHTML = "Answer is Correct";
        score++;
    } else {
        document.getElementById("res").innerHTML = "Answer is Incorrect";
    }
    document.getElementById("sub").disabled = true;
    for (j = 0; j < 4; j++) {
        document.getElementsByName("name")[j].disabled = true;
    }
   
}


function resF(i) {
    document.getElementById("res").innerHTML = "Check a value then submit";
}


function submit() {
    var val = document.getElementsByName("name");
    for (var i = 0; i < val.length; i++) {
        if (val[i].checked == true) {
            resT(i);
            break;
        } else {
            resF(i);
        }
    }
}
