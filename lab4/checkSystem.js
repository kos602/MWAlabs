const os = require('os');
const { Observable } = require('rxjs');


function checkSystem(){
    Observable.create(function(observer){

        if(Number(Math.round(os.freemem()/1024/1024/1024 + 'e2')+'e-2') < 4.00){
            throw new Error('This app needs at least 4 GB of RAM');
        }

        if(os.cpus().length < 2){
            throw new Error('Processor is not supported');
        }

        observer.next('System is checked successfully.');
        observer.complete();
    }).subscribe(
        (next) => console.log(next),
        (err) => console.error(err),
        null
    );
}
checkSystem();