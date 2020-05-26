var Mouse = require('./Mouse');

function Cat(name){
	this.name = name;
	this.stomach = [];
}
Cat.prototype.eat = function(animal){
	if(animal instanceof Mouse){
		this.stomach.push(animal);
		animal.isDead = true;
	}else{
		throw new Error('Cat can only eat mouse!');
	}
	
}



module.exports = Cat;
