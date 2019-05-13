$(function() {
    let maxWord = "";
    let maxScore = 0;
    let direction = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    let vowels = ["a", "e", "i", "o", "u"];

    function getScore(c) {
        if (c === "y") {
            return -10;
        }

        for (let vowel in vowels) {
            if (c === vowel) {
                return 3;
            }
        }

        return -2;
    }

    $("#mazeForm").on("submit", function(event) {
        let mazeEntry = $.trim($("#mazeEntry").val());
        let lines = mazeEntry.split("\n");

        console.log('score:' + getScore('a'));

        var answer = 'Word: "", Score: ';
        $("#mazeSolution").html(mazeEntry);
        event.preventDefault();
    });
});