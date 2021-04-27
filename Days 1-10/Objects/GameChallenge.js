//create an object using bracket and dot notation that represents the characters and related data for the game

var game = {};
game.murderer="??";								//objects
game["weapons"] =[
{type:'Knife', location:'lab'},
{type:'Lasers'},
{type:'Guns'}
];


game.name=[];
game.name[0]='Miss Scarlet';			//cant push things to an object
game.name.push('Mr.Green')

console.log(game) 