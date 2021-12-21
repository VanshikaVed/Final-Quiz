function addUserName(){

    var p1 = document.getElementById("p1_input").value;
    var p2 = document.getElementById("p2_input").value;

    localStorage.setItem("Player_1",p1);
    localStorage.setItem("Player_2",p2);
    console.log("First User Name is:-  " + p1);
    console.log("Second User Name is:-  " + p2);

    window.location = "index_c90.html"; 
}