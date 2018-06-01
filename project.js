const counter = document.querySelector('#guessBtn'),
    attemptsRe = document.querySelector('#attemps-remain')
    attemptsAll = document.querySelector('#all-attempts'),
    attemptsCurrentSession = document.querySelector('#session-attempts'),
    catsCards = document.querySelector('.cats-grid'),
    cats = document.querySelectorAll('#cat'),
    whatPlayerChoose = document.querySelector('#playerChoice'),
    fourBtn = document.querySelector('#four-btn'),
    sevenBtn = document.querySelector('#seven-btn'),
    tenBtn = document.querySelector('#ten-btn');
      
var x = 0,
    z = 9,
    min = 0,
    max = 9,
    winningNum = 2,
    attemptsRemain = 3,
    choose;

fourBtn.addEventListener('click', function(e){
    z = 3;
    pagination();
});
sevenBtn.addEventListener('click', function(e){
    z = 6;
    pagination();
})
tenBtn.addEventListener('click', function(e){
    z = 9;
    pagination();
})


cats.forEach(function(item, index){
    item.addEventListener('click', function(e){
        colorCats();
        if (item.style.borderColor === 'grey') {
            item.style.borderColor = 'orange';
            choose = index;
            console.log(`this chosen: ${choose}`);
        } else {
            item.style.borderColor = 'grey';
         }
        
        whatPlayerChoose.textContent = (` You choose: ${++choose}`);
    });
});

function colorCats(){
    cats.forEach(function(item){
        item.style.borderColor = "grey";
    })
}

function pagination(){
    cats.forEach(function(item, index){
        if (index > z) {
            item.style.display = 'none';
        } else {
            item.style.display = 'grid';
        }
    });
};

counter.addEventListener('click', function(e){
    x = x + 1;
    setText();
    minusAttempt();
    testWin();
    attemptsRe.textContent = (`Attempts remain: ${attemptsRemain}`)
});

function setText(){
    attemptsAll.textContent = (` Your total wins: ${x}`);
    attemptsCurrentSession.textContent = (` Your wins for this session: ${x}`);
};

function testWin(){
    if (winningNum == --choose) {
        alert("YOU WIN WELL PLAYED MADAMADAMADA");
        attemptsRemain = attemptsRemain + 3;
    } else {
        alert("Wrong Cat, try Again");
        cats[choose].style.borderColor = 'red';
    }
}

function minusAttempt(){
        if (attemptsRemain > 0) {
            attemptsRemain = attemptsRemain - 1;
        } else if(attemptsRemain <= 0 ) {
            alert("Game over!Loooser!");
            attemptsRemain = attemptsRemain + 3;
    };
};