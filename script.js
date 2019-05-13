$(function () {
    let maxWord = "";
    let maxScore = 0;
    let directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    let vowels = ["a", "e", "i", "o", "u"];

    function getScore(c) {
        if (c === "y") {
            return -10;
        }

        for (var index in vowels) {
            if (c === vowels[index]) {
                return 3;
            }
        }

        return -2;
    }

    function calculatingTheScore(grid, visited, row, col, word, score) {


    }

    function textToArray(text) {
        let lines = text.split("\n");

        for (let i = 0; i < lines.length; i++) {
            lines[i] = lines[i].split('');
        }

        return lines;
    }

    function findMax(grid) {
        let visited = new Array(10);

        for (let i = 0; i < 10; i++) {
            visited[i] = new Array(30);
        }

        calculatingTheScore(grid, visited, 0, 0, "", 0);
    }

    $("#mazeForm").on("submit", function (event) {
        let mazeEntry = $.trim($("#mazeEntry").val());

        findMax(textToArray(mazeEntry));

        var answer = 'Word: "' + maxWord + '", Score: ' + maxScore;
        $("#mazeSolution").html(answer);
        event.preventDefault();
    });
});