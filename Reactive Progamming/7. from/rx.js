let Rx = require('../node_modules/rxjs');
console.log(Rx);
var obs = Rx.from( // from is new API, it automatically fetch if arguments are array, promise or object and create relevant observables.
    fetch('https://null.jsbin.com') //fetch is DOM API
);


obs.subscribe(value=>console.log(value),
error=>console.log({error}),
()=>console.log("Done"));
