
const game = {
    username: null,
    stage: 0,
    start() {
        game.username = $('input').val();
        game.hideMessage();
        game.showRowButtons();
        game.newPig();
        //2 min timer for round (consistent for all rounds)
        //timer for health meters (stage 1: 2 seconds, stage 2: 5 seconds, stage 3: 10 seconds)
        //display button section at the bottom
    },
    hideMessage() {
        $('#message').hide();
    },
    showRowButtons() {
        $('#game-container').append('<div id="row-buttons"></div>');
    },
    newPig() {
        $('#main-image img').attr('src', './images/pig-baby.png');
    }
};



$("button").on("click", game.start);

