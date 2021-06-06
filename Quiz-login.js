function login(){
    var player1 = document.getElementById("p1-name").value
    var player2 = document.getElementById("p2-name").value
    localStorage.setItem("player1",player1)
    localStorage.setItem("player2",player2)
    window.location="Quiz.html";
}