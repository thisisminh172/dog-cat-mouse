var chalk = require('chalk');
function Dog(name){
	this.name = name;
	this.stomach = [];
}
Dog.prototype.eat = funciton(cat){
	this.stomach.push(cat);
}
Dog.prototype.sayHi = function() {
	// body...
	console.log('Hi! i am a dog. Name is '+ chalk.red(this.name));
};
module.exports = Dog;