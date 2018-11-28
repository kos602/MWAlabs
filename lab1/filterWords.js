var rxjs = require('rxjs');

const {from} = rxjs;
const {reduce, map} = require('rxjs/operators');

/*
String.prototype.filterWords = function(arr){
	return this.replace(/(\w+)/ig, function(str) {
		if(arr.indexOf(str) !== -1){
			return "***";
		}
		return str;
	});
};


String.prototype.filterWords = function(arr){
	let $self = this;
	new Promise(function(resolve, reject){
		let str = $self.replace(/(\w+)/ig, function(str) {
			if(arr.indexOf(str) !== -1){
				return "***";
			}
			return str;
		});
        resolve(str);
	}).then(s => console.log(s));
	return "Promise { <pending> }";
};

String.prototype.filterWords = async function(arr){
	let $self = this;
	await new Promise(function(resolve, reject){
		let str = $self.replace(/(\w+)/ig, function(str) {
			if(arr.indexOf(str) !== -1){
				return "***";
			}
			return str;
		});
        resolve(str);
	}).then(s => console.log(s));
};
*/

String.prototype.filterWords = function(arr) {
	let str = null;
	from(this.split(/(\w+)/))
		.pipe(
			map(s => {return arr.indexOf(s) === -1 ? s : '***';} ),
			reduce( (t,s) => t + s, '')
		).subscribe( s => {return str = s} );
	return str;
};

console.log("This house is nice!".filterWords(['house', 'nice']));