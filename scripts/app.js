
const game = {
    username: null,
    stage: 3,
    start() {
        game.username = $('input').val();
    }
}


// const startGame = function startGame() {

//     console.log(name);
// }

$("button").on("click", game.start);

