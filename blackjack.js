

let cards = []

let isAlive=false;
let sum = 0;
let hasBlackJack = false;
let msg="";

let messageEl=document.getElementById("message-el");
let sumEl=document.getElementById("sum-el");
let cardEl=document.getElementById("cards");



let player = {
    name : "Aravinth",
    chips : 145
}

let playerEl=document.getElementById("player-el");
playerEl.textContent = player.name + "  :  $ "+player.chips;

function renderGame() {
    sumEl.innerText="Sum :"+sum;
    cardEl.textContent = "Cards :";
    for(let i=0;i<cards.length;i++){
        cardEl.textContent += cards[i]+"  "; 
    }

    // cardEl.innerText="card : "+cards[0]+"  "+cards[1];
    if(sum<21){
        msg="Do you want to draw a new card ?";
    }
    else if(sum===21){
        msg="Whoo! , you got blackjack .";
        hasBlackJack=true;
    }
    else{
        msg="you are out of blackjack";
        isAlive=false;
    }
    messageEl.textContent=msg;
// console.log(msg);

}

function newCard() {

    if(isAlive==true && hasBlackJack==false){
        console.log("clicked");

        let card=getRandomCard();
        cards.push(card);
        sum=sum+card;
        console.log(cards);

        renderGame();
    }

}

function startGame() {
    isAlive = true;
    let firstcard = getRandomCard();
    let secondcard = getRandomCard();
    cards = [firstcard, secondcard]
    sum = firstcard+secondcard;
    renderGame();
}

function getRandomCard() {
    let random = Math.floor(Math.random()*13)+1;
    if(random==1){
        return 11;
    }
    else if (random>=11&&random<=13) {
        return 10;
    }
    else {
        return random;
    }
}





let castle = {
    name : "aravinth's castle" ,
    guests : 4 ,
    beds : 2 ,
    isAvailable : true,
}

console.log(castle.beds)