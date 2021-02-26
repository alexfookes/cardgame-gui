decksize=29// this function generates a shuffled deck
var p1cardcount = 0
var p2cardcount = 0
var p1deck=0
var p2deck=0
function sup(){
	alert("hi")
}
function shuffle(deck) {
  var n = deck.length;              // Length of the array
  for(var i=0 ; i<n-1 ; ++i) {
    var j = Math.floor(Math.random() * n);;       // Get random of length
    var temp = deck[i];             // Swap [i] and[j]
    deck[i] = deck[j];
    deck[j] = temp;
  }
  return deck;}
  //---------------------------------------------------------
function cardrawn(){ i= decksize
decksize = decksize-1 
return cards[i]
}
//------------------------------------------------------------------
function roundstarted(){ //this function draws 2 cards then decides which player wins the gives them 2 cards, it isnt quite complete yet

	var p1card = cardrawn()
	var p2card = cardrawn()
	console.log(p1card.number+" "+p1card.colour)
	console.log(p2card.number+" "+p2card.colour)
	
	if(p1card.colour==p2card.colour){
		if(p1card.number<p2card.number){
			p2cards[p2deck]=p1card
			p2deck++
			p2cards[p2deck]=p2card
			p2deck++
			p2cardcount++
			p2cardcount++
			console.log("player 2 wins, you now have "+p2cardcount+" cards")
		}
		else{ 
			p1cards[p1deck]=p1card
			p1deck++
			p1cards[p1deck]=p2card
			p1deck++
			p1cardcount++
			p1cardcount++
			return console.log("player 1 wins, you now have "+p1cardcount+" cards")
		}
	}	
	else if((p1card.colour=="red")&&(p2card.colour=="black")){
		p1cards[p1deck]=p1card
		p1deck++
		p1cards[p1deck]=p2card
		p1deck++
		p1cardcount++
		p1cardcount++
		console.log("player 1 wins, you now have "+p1cardcount+" cards")
	}
	else if((p1card.colour=="yellow")&&(p2card.colour=="red")){
		p1cards[p1deck]=p1card
		p1deck++
		p1cards[p1deck]=p2card
		p1deck++
		p1cardcount++
		p1cardcount++
		console.log("player 1 wins, you now have "+p1cardcount+" cards")
	}
	else if((p1card.colour=="black")&&(p2card.colour=="yellow")){
		p1cards[p1deck]=p1card
		p1deck++
		p1cards[p1deck]=p2card
		p1deck++
		p1cardcount++
		p1cardcount++
		console.log("player 1 wins, you now have "+p1cardcount+" cards")
	}
	else{
		p2cards[p2deck]=p1card
		p2deck++
		p2cards[p2deck]=p2card
		p2deck++
		p2cardcount ++
		p2cardcount ++
		console.log("player 2 wins, you now have "+p2cardcount+" cards")
	}
}
let p1cards = new Array();
let p2cards = new Array();
var players = [
	{
		name: "alex",
		password: "000",
	},
	{
		name: "jim",
		password: "111",
	},
	{
		name: "admin",
		password: "222",
	},
]

var cards = [// this is my record for the cards number and colour
  {
    colour: "red",
    number: 1,
  },
  {
    colour: "red",
    number: 2,
  },  
    {
    colour: "red",
    number: 3,
  },
  {
    colour: "red",
    number: 4,
  },
    {
    colour: "red",
    number: 5,
  },
    {
    colour: "red",
    number: 6,
  },
    {
    colour: "red",
    number: 7,
  },
    {
    colour: "red",
    number: 8,
  },
    {
    colour: "red",
    number: 9,
  },
    {
    colour: "red",
    number: 10,
  },
 //--------------------------------------------------------------
   {
    colour: "yellow",
    number: 1,
  },
  {
    colour: "yellow",
    number: 2,
  },  
    {
    colour: "yellow",
    number: 3,
  },
  {
    colour: "yellow",
    number: 4,
  },
    {
    colour: "yellow",
    number: 5,
  },
    {
    colour: "yellow",
    number: 6,
  },
    {
    colour: "yellow",
    number: 7,
  },
    {
    colour: "yellow",
    number: 8,
  },
    {
    colour: "yellow",
    number: 9,
  },
    {
    colour: "yellow",
    number: 10,
  },
 //--------------------------------------------------------------
    {
    colour: "black",
    number: 1,
  },
  {
    colour: "black",
    number: 2,
  },  
    {
    colour: "black",
    number: 3,
  },
  {
    colour: "black",
    number: 4,
  },
    {
    colour: "black",
    number: 5,
  },
    {
    colour: "black",
    number: 6,
  },
    {
    colour: "black",
    number: 7,
  },
    {
    colour: "black",
    number: 8,
  },
    {
    colour: "black",
    number: 9,
  },
    {
    colour: "black",
    number: 10,
  },
]
//-------------------------------------------------------------------
shuffle(cards)
let x = 0
while(x<2){
	let p1number = prompt("enter your user number")
	var p1details = players[p1number]
	console.log("welcome "+p1details.name)
	let p1password = prompt("enter your password")
	if(p1password == p1details.password){
		console.log ("hi")
		x=2
	}
	else{
		console.log("password is incorrect")
		x = 0

	}
}
x = 0
while(x<2){
	let p2number = prompt("enter your user number")
	var p2details = players[p2number]
	console.log("welcome "+p2details.name)
	let p2password = prompt("enter your password")
	if(p2password == p2details.password){
		console.log ("hi")
		x=2
	}
	else{
		console.log("password is incorrect")
		x = 0

	}
}

for (var u =14; u>-1; u--){	
	roundstarted()
}
console.log(p1cards.length)
for(u=0; u<=p1cards.length; u++){
console.log(p1cards[u])
}
console.log(p2cards.length)
for(u=0; u<=p2cards.length; u++){
console.log(p2cards[u])
}
if(p1cards.length<p2cards.length){
	console.log(p2details.name+" wins, with "+p2cards.length+" cards")
}
else{
	console.log(p1details.name+" wins, with "+p1cards.length+" cards")
}
