let Observable = require('rxjs').Observable;

// let { Observable }  = require('../node_modules/rxjs/Observable');

var obbl = Observable.create(function(observer){
    try{
    console.log('Hello Rx');
    observer.next(10);
    let a = b.c.e;
    observer.next(10);
    observer.next(10);
    observer.next(10);
    }catch(err){
        observer.error(err);
    }
});

obbl.subscribe(
    value => console.log({value}),
    error => console.log("Custom error handler",{error}),
    ()=> console.log("done")
)