
var cards = [
	{
		rank: 'queen',
		suit: 'hearts',
		cardImage: 'images/queen-of-hearts.png'
	},
	{
		rank: 'queen',
		suit: 'diamonds',
		cardImage: 'images/queen-of-diamonds.png'
	},
	{
		rank: 'king',
		suit: 'hearts',
		cardImage: 'images/king-of-hearts.png'
	},
	{
		rank: 'king',
		suit: 'diamonds',
		cardImage: 'images/king-of-diamonds.png'
	}
];
var cardsInPlay = [];

var checkForMatch = function(k, click_item) {
	//unveil the latest card clicked on
	click_item.setAttribute('src', cards[k].cardImage);
	if (cardsInPlay.length === 2) {
		first_click = cardsInPlay[0];
		second_click = cardsInPlay[1];
		if (first_click != second_click) {
			if (cards[first_click.getAttribute('data-id')].rank === cards[second_click.getAttribute('data-id')].rank) {    
				alert("You found a match!");
			} else {
				alert("Sorry, try again.");
			}
			//cover up cards and reset game 	
			cardsInPlay[0].setAttribute('src', 'images/back.png');
			cardsInPlay[1].setAttribute('src', 'images/back.png');
			cardsInPlay = [];
		} else {
			// clear away the second click from cardsInPlay because it's the same as first click 
			cardsInPlay.pop();
		}
	}
}

var flipcard = function() {
	console.log("flip ", this);
	var cardId = this.getAttribute('data-id');
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(this); 	
	checkForMatch(cardId, this);
}

var createBoard = function() {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipcard);
		document.getElementById('game-board').appendChild(cardElement);
	}
}

createBoard();


// var checkForMatch = function(k, click_item) {
// 	click_item.setAttribute('src', cards[k].cardImage);
// 	if (cardsInPlay.length === 2) {
// 		if (cards[cardsInPlay[0]].rank === cards[cardsInPlay[1]].rank) {    
// 			alert("You found a match!");
// 		} else {
// 			alert("Sorry, try again.");
// 		}

// 		cardsInPlay = [];
// 	}
// }
