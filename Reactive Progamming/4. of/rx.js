let Rx = require('../node_modules/rxjs');
// Rxjs is much about operators. 
// Let's look at of operator
// var obs = Rx.Observable.create(function(observer){
//     console.log('Hello Rx');
//     observer.next(10);
//     observer.next(50);
//     observer.next(100);
//     observer.next(200);
//     observer.complete();
// });

//Above can be written with of as well.
 var obs = Rx.of(10,50,100,200);

 obs.subscribe(value=>console.log(value),
 error=>console.log({error}),
 ()=>console.log("Done"));