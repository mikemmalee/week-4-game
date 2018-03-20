$(document).ready(function(){

    var wins = 0;
    $('#wins').text(wins);
    var losses = 0;
    $('#losses').text(losses);
    
    //computer generates random number
    var ranNum = Math.floor(Math.random() * (120 - 19 + 1)) +19;
    //random number is displayed 
    $("#ranNum").text(ranNum);

    var userTotal = 0;
    //user input is displayed 
    $('#userTotal').text(userTotal);

    //random value is assigned to each crystal
    var val1 = Math.floor(Math.random() * (12 - 1 + 1)) +1;
    var val2 = Math.floor(Math.random() * (12 - 1 + 1)) +1;
    var val3 = Math.floor(Math.random() * (12 - 1 + 1)) +1;
    var val4 = Math.floor(Math.random() * (12 - 1 + 1)) +1;


    //resets randomly generated values and user total
    function reset(){
    ranNum = Math.floor(Math.random() * (120 - 19 + 1)) +19;
    $("#ranNum").text(ranNum);

    userTotal = 0;
    $('#userTotal').text(userTotal);

    val1 = Math.floor(Math.random() * (12 - 1 + 1)) +1;
    val2 = Math.floor(Math.random() * (12 - 1 + 1)) +1;
    val3 = Math.floor(Math.random() * (12 - 1 + 1)) +1;
    val4 = Math.floor(Math.random() * (12 - 1 + 1)) +1;
    };

    //executes a win and resets game
    function win(){
        wins++;
        $('#wins').text(wins);
        reset();
    };

    //executes a loss and resets game
    function lose(){
        losses++;
        $('#losses').text(losses);
        reset();
    };

    //determines win or loss
    function logic(){
        if (userTotal === ranNum){
            win();
        } else if (userTotal > ranNum){
            lose();
        }
    };

    //adds value of button clicks and increases user total
    $("#crystal1").on("click", function (){
        userTotal = userTotal + val1;
        $('#userTotal').text(userTotal); 
        logic();
    });

    $("#crystal2").on("click", function (){
        userTotal = userTotal + val2;
        $('#userTotal').text(userTotal);
        logic(); 
    });

    $("#crystal3").on("click", function (){
        userTotal = userTotal + val3;
        $('#userTotal').text(userTotal); 
        logic();
    });

    $("#crystal4").on("click", function (){
        userTotal = userTotal + val4;
        $('#userTotal').text(userTotal); 
        logic();
    });
    
});