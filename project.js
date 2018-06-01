const counter = document.querySelector('#guessBtn'),
      attemptsAll = document.querySelector('#all-attempts');
      attemptsCurrentSession = document.querySelector('#session-attempts'),
      catsCards = document.querySelector('.cats-grid'),
      cats = document.querySelectorAll('#cat');
      
var x = 0;
var z = 0;
cats.forEach(function(item, index){
    
    item.addEventListener('click', function(e){
        colorCats();
        if (item.style.borderColor === 'grey') {
            item.style.borderColor = 'orange';
            var choose = index;
            console.log(`this chosen: ${choose}`);
        } else {
            item.style.borderColor = 'grey';
         }
    });
});

function colorCats(){
    cats.forEach(function(item){
        item.style.borderColor = "grey";
        console.log("do");
    })
}

counter.addEventListener('click', function(e){
    x = x + 1;
    setAtempts();
});

function setAtempts(){
    attemptsAll.textContent = (` Attempts made: ${x}`);
    attemptsCurrentSession.textContent = (` Attempts for this session: ${x}`)
};