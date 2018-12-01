const os = require('os');
const { of } = require('rxjs/operators');

of(os).
console.log(os.cpus().length);
console.log(Number(Math.round(os.freemem()/1024/1024/1024 + 'e2')+'e-2'));