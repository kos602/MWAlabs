var rxjs = require('rxjs');

const {of} = rxjs;
const {filter} = require('rxjs/operators');

function isWeekend() {
	let isWeekend = false;
	let todayDate = new Date();
    let day = todayDate.getDay();

	of(day).pipe(filter(d => d === 0 || d === 6)).subscribe( (d) => isWeekend = true );

	return isWeekend;
}

console.log(isWeekend());