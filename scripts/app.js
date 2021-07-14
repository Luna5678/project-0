
const game = {
    username: null,
    stage: 0,
    time: 5,
    cleanScore: 5,
    loveScore: 5,
    foodScore: 5,
    start() {
        game.username = $('input').val();
        game.hideMessage();
        game.newPig();
        game.displayName();
        game.updateScores();
        //2 min timer for round (consistent for all rounds)
        //timer for health meters (stage 1: 2 seconds, stage 2: 5 seconds, stage 3: 10 seconds)
    },
    hideMessage() {
        $('#message').hide();
    },
    newPig() {
        $('#main-image img').attr('src', './images/pig-baby.png');
    },
    displayName() {
        $('#main-image').prepend(`<h2><em>${game.username}</em></h2>`);
    },
    updateScores(){
        $('#clean-score').text(`${game.cleanScore}`);
        $('#clean-button').on('click', function() {
            $('#clean-score').text(`${game.cleanScore+=1}`);
        })
    },
    timer: null,
    startTimer() {
        this.timer = setInterval(game.reduceTime, 1000);
    },
    reduceTime() {
        game.time--;
        console.log(game.time);
        if (game.time <=0) {
            clearInterval(game.timer);
        }
    },

    meter: null,
    startMeter(){
        this.meter = setInterval(game.reduceMeter, 1000);
    },
    reduceMeter(){
        game.cleanScore--;
        $('#clean-score').text(`${game.cleanScore}`);
        if (game.cleanScore <=0) {
            clearInterval(game.meter);
        }
    }
    
    // rip (){
    //     if (game.cleanScore === 0 || game.loveScore === 0 || game.foodScore ===0) {
            
    //     }
    // },
//     
//     resetScores(){
//         game.cleanScore = 3;
//     },

//     newStage() {
//         clearInterval(game.timer);
//         game.resetScores();
//         if (game.round > 3){
//             console.log("Ready for transfer");
//         }

//     }

};


$('#start-button').on("click", game.start);


// /* YOUTUBE */

// const $timerTex = $('#timer-text');
// const $btnStart = $('#btn-start');

// let gameTimer = 10;
// let intervalID;


// ($btnStart).on('click',  function(){
//     intervalID = setInterval(function(){
//         gameTimer-=1;
//         $($timerTex).text(gameTimer);
//         }, 1000);
//         if (intervalID === 0) {
//             clearInterval(intervalID)
//         }
//         });

