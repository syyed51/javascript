let Rx = require('../node_modules/rxjs');

var obs = Rx.Observable.create(function(observer){
    try{
    console.log('Hello Rx');
    observer.next(10);
    observer.complete();    //stops the observer and call completion handler on subscriber
    observer.next(50);      // This will not get delievered, to subscriber.
    }catch(err){    
        observer.error(err);
    }
});

obs.subscribe(function(value){ // next value handler
    console.log({value});
},function(error){  //error handler
    console.log({error});
},function(){ //completion handler
    console.log("Done");
});

/*
Completion notification is very important, without it there will be no way to find out if one observer is complete, if we wish to do something on completion.


*/