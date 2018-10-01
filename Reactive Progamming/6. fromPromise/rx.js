let Rx = require('../node_modules/rxjs');
console.log(Rx);
var obs = Rx.fromPromise(   // fromPromise is depricated, use from
    fetch('https://null.jsbin.com') //fetch is DOM API
);


obs.subscribe(value=>console.log(value),
error=>console.log({error}),
()=>console.log("Done"));
