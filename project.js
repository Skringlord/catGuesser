const counter = document.querySelector('#guessBtn'),
      attemptsAll = document.querySelector('#all-attempts');
      attemptsCurrentSession = document.querySelector('#session-attempts');
      
var x = 0;

counter.addEventListener('click', function(e){
    x = x + 1;
    setAtempts();
});

function setAtempts(){
    attemptsAll.textContent = (` Attempts made: ${x}`);
    attemptsCurrentSession.textContent = (` Attempts for this session: ${x}`)
}
