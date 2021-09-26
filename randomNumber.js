function randomNumber() {
    const number = document.querySelector('.guessNumber');
    const result = document.querySelector('.result');

    let random = Math.floor(Math.random() * 10 + 1);
    let guess = Number(number.value);
    
    if(random === guess) {
        result.textContent= 'Your guess was correct!'
        result.style.color= 'green';        
    } else if (random !== number){
        result.textContent= 'Your guess was not correct!'
        result.style.color= 'red';
    }
}