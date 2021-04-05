const counter = document.getElementById("counter");

let likeCount = 0;
const timing = () =>{
    counter.textContent = parseInt(counter.textContent,10) + 1;
    likeCount = 0;
}
let timer = setInterval(timing, 1000);

const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const heart = document.getElementById("heart");
const pause = document.getElementById("pause");
const submit = document.getElementById("submit");

const increaseTimer = () => {
    counter.textContent = parseInt(counter.textContent,10) + 1;
}

const decreaseTimer = () => {
    counter.textContent = parseInt(counter.textContent,10) - 1;
}

plus.addEventListener("click", increaseTimer);
minus.addEventListener("click", decreaseTimer);



heart.addEventListener("click", () => {
    
    const currentCounter =  parseInt(counter.textContent,10);
    if (likeCount > 0) {
        const liLikes = document.getElementById(`${currentCounter}`);
        likeCount += 1;
        liLikes.textContent = `${currentCounter} has ${likeCount} likes`
    }
    else {
        const li = document.createElement('li');
        likeCount += 1;
        li.textContent = `${currentCounter} has ${likeCount} like`;
        li.id = `${currentCounter}`
        const ul = document.querySelector("ul.likes");
        ul.appendChild(li);
        
    }
    
});


pause.addEventListener('click',() => {
    if (pause.textContent === ' pause '){ 
        clearInterval(timer);
        plus.disabled = true;
        minus.disabled = true;
        heart.disabled = true;
        submit.disabled = true;
        pause.textContent = ' resume ';
    }
    else{
        pause.textContent = ' pause '
        plus.disabled = false;
        minus.disabled = false;
        heart.disabled = false;
        submit.disabled = false;
        timer = setInterval(timing, 1000);
        

    }
    
});

const form = document.querySelector('form');
form.addEventListener('submit', (event) =>{
    const input = document.getElementById("comment-input");
    const p = document.createElement('p');
    p.textContent = input.value;
    document.body.appendChild(p);
    form.reset();
    event.preventDefault();
})