let Rx = require('../node_modules/rxjs');

function fun(){
    console.log("Hello function");
    return 42;
}
console.log('start');
console.log(fun());
console.log('end');

var foo = Rx.Observable.create(function(observer){
    console.log('Hello Rx');
    observer.next(10);
    observer.next(10);
    observer.next(30);
    observer.next(40);
    observer.next(50);
    setTimeout(function(){
        observer.next(100);
    },1000);
});

console.log('start');
foo.subscribe(function(value){
    console.log({value});
});
console.log('end');