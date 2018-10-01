let Rx = require('../node_modules/rxjs');
console.log(Rx);
var obs = Rx.from([10,50,100,200]);
//FromArray method has been depricated
// var obs = Rx.fromArray([10,50,100,200]);

obs.subscribe(value=>console.log(value),
error=>console.log({error}),
()=>console.log("Done"));
