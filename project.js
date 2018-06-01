const counter = document.querySelector('#guessBtn'),
      attemptsAll = document.querySelector('#all-attempts');
      attemptsCurrentSession = document.querySelector('#session-attempts'),
      catsCards = document.querySelector('.cats-grid'),
      cats = document.querySelectorAll('#cat');
      
var x = 0;
cats.forEach(function(item, index){
    item.addEventListener('click', function(e){
        item.style.borderColor = 'orange';
    });
});

counter.addEventListener('click', function(e){
    x = x + 1;
    setAtempts();
});

function setAtempts(){
    attemptsAll.textContent = (` Attempts made: ${x}`);
    attemptsCurrentSession.textContent = (` Attempts for this session: ${x}`)
};