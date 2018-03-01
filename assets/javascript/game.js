
// <--- Global Variables --->
var randomNumber = function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var crystals;
var gameNumber;
var totalScore;
var wins = 0;
var losses = 0;

// <--- Global Function --->
//resets game by assigning new random numbers to the gameNumber and each crystal and resetss totalScore to 0
function resetGame() {
    crystals = {
        "1": randomNumber(1,12),
        "2": randomNumber(1,12),
        "3": randomNumber(1,12),
        "4": randomNumber(1,12),
        "5": randomNumber(1,12)
    }
    console.log(crystals);
    gameNumber = randomNumber(19,120);
    $(".game-number").text(gameNumber);
    totalScore = 0;
    $(".total-score").text(totalScore);
}

// <--- Start Game --->
//shows instructions when clicked
$(".instructions-button").on("click", function() {
    $(".instructions-button").hide();
    $(".instructions").slideDown();
})
$(".collapse-button").on("click", function() {
    $(".instructions").slideUp();
    $(".instructions-button").fadeIn(2000);
})

resetGame();

//shows initial scoreboard
$(".wins").text(wins);
$(".losses").text(losses);

//Loops through crystals object. Upon the click of a crystal image, when i equals the html id value of the image, add the value of i to totalScore
$.each(crystals, function(i, val) {
    $("#" + i + "").on("click", function() {
        totalScore = totalScore + val;
        $(".total-score").text(totalScore);
        if (totalScore === gameNumber) {
            $(".you-won").fadeIn(500).fadeOut(500);
            wins++;
            $(".wins").text(wins);
            resetGame();
        } else if (totalScore > gameNumber) {
            $(".you-lost").fadeIn(500).fadeOut(500);
            losses++;
            $(".losses").text(losses);
            resetGame();
        }
    })
}) 




