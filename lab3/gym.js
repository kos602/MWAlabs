var EventEmitter = require('events');

class Gym extends EventEmitter{
    constructor() {
        super();
    }
    go() {
        setInterval(() => this.emit('go'), 1000);
    }
}

let gym = new Gym();
gym.on('go', () => console.log("Athlete is working out"));
gym.go();

