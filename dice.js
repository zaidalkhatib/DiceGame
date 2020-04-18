document.querySelector("btn");

function rand() {
    var randonNumber1 = Math.random() * 6;
    var randonNumber1 = Math.floor(randonNumber1) + 1;
    var image = "images/dice" + randonNumber1 + ".png";
    document.querySelectorAll("img")[0].setAttribute("src", image);
    var randonNumber2 = Math.random() * 6;
    var randonNumber2 = Math.floor(randonNumber2) + 1;
    var image = "images/dice" + randonNumber2 + ".png";
    document.querySelectorAll("img")[1].setAttribute("src", image);

    if (randonNumber2 > randonNumber1) {
        document.getElementById("print").innerHTML = "Second player is winner!!"
    } else if (randonNumber2 < randonNumber1) {
        document.getElementById("print").innerHTML = "First player is winner!!"
    } else {
        document.getElementById("print").innerHTML = "Draw!!"

    }
}