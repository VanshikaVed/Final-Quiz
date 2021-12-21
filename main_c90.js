var user_name1= localStorage.getItem("Player_1");
var user_name2= localStorage.getItem("Player_2");
var score_1 = 0;
var score_2 = 0;

document.getElementById("q_turn").innerHTML = user_name1;
document.getElementById("a_turn").innerHTML = user_name2;
document.getElementById("p1_name").innerHTML = user_name1 + ":- ";
document.getElementById("p2_name").innerHTML = user_name2 + ":- ";
document.getElementById("p1_score").innerHTML = score_1;
document.getElementById("p2_score").innerHTML = score_2;


function send(){
     number_1 = document.getElementById("q_n1").value;
     number_2 = document.getElementById("q_n2").value;
     product = parseInt(number_1) * parseInt(number_2);

    if(number_1 == "" || number_2 == ""){
        document.getElementById("result").style.color = "blue";
        document.getElementById("result").innerHTML = "Please Enter a Question";
    }
else{
    document.getElementById("result").innerHTML = "";
    console.log("The product of " + number_1 + " & " + number_2 + " is " + product);
    document.getElementById("output").style.display = "inline-block";
    document.getElementById("question").innerHTML =  number_1 + " x " + number_2;
    document.getElementById("q_n1").value = "";
    document.getElementById("q_n2").value = "";
}
}

var question_turn = "player1";
var answer_turn = "player2";

function check_product()
{
answer = document.getElementById("ans").value;
document.getElementById("ans").value = "";
if(answer == "")
{
document.getElementById("result").style.color = "blue";
document.getElementById("result").innerHTML = "Please Enter a Number";
}
else
{
    document.getElementById("result").innerHTML = "";

    if(answer == product){
        document.getElementById("result").innerHTML = "Yay!! You Got It Right!";
        if(answer_turn == "player2"){
        score_2 = score_2 + 1;
        document.getElementById("p2_score").innerHTML = score_2;
        }
        else{
            score_1 = score_1 + 1;
        document.getElementById("p1_score").innerHTML = score_1;
        }
    
    }
    else{
        document.getElementById("result").innerHTML = "Oops!! You Got It Wrong!";
        if(answer_turn == "player2"){
        score_2 = score_2 - 1;
        document.getElementById("p2_score").innerHTML = score_2;
        }
        else{
            score_1 = score_1 - 1;
        document.getElementById("p1_score").innerHTML = score_1;
        } 

    }

    if(question_turn == "player1"){
        question_turn = "player2";
        answer_turn = "player1";
        document.getElementById("a_turn").innerHTML = user_name1;
document.getElementById("q_turn").innerHTML = user_name2;
    }
    else{
        question_turn = "player1";
        answer_turn = "player2";
        document.getElementById("q_turn").innerHTML = user_name1;
document.getElementById("a_turn").innerHTML = user_name2;
    }
}
}