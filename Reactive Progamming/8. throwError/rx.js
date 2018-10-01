let Observable = require('rxjs').Observable;
let { throwError } = require('rxjs');

// let { Observable }  = require('../node_modules/rxjs/Observable');

var obbl = Observable.create(function(observer){
    try{
    console.log('Hello Rx');
    observer.next(10);
    throwError('This is an error!');
    observer.next(10);
    observer.next(10);
    observer.next(10);
    }catch(err){
        observer.error(err);
    }
});

const source = throwError('This is an error!');

obbl.subscribe(
    value => console.log({value}),
    error => console.log("Custom error handler", {error}),
    ()=> console.log("done")
)