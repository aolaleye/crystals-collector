
var randomNumber = function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var crystals = {
    "1": randomNumber(1,12),
    "2": randomNumber(1,12),
    "3": randomNumber(1,12),
    "4": randomNumber(1,12),
    "5": randomNumber(1,12)
}
var gameNumber = randomNumber(19,120);
var totalScore = 0;
var wins = 0;
var losses = 0;
// var userWon = false;
// var userLost = false;

//shows instructions when clicked
$(".instructions-button").on("click", function() {
    $(".instructions-button").hide();
    $(".instructions").slideDown();
})
$(".collapse-button").on("click", function() {
    $(".instructions").slideUp();
    $(".instructions-button").show("slow");
})

//shows initial scoreboard
$(".game-number").text(gameNumber);
$(".total-score").text(totalScore);
$(".wins").text(wins);
$(".losses").text(losses);

console.log(crystals);

$.each(crystals, function(i, val) {
    $("#" + i + "").on("click", function() {
        totalScore = totalScore + val;
        $(".total-score").text(totalScore);
        if (totalScore === gameNumber) {
            $(".you-win").fadeIn("slow").fadeOut("slow");
            wins++;
            $(".wins").text(wins);
        } else if (totalScore > gameNumber) {
            $(".you-lose").fadeIn("slow").fadeOut("slow");
            losses++;
            $(".losses").text(losses);
        }
    })
}) 



