
function * generator(){
    console.log("Hello generators");
    yield 42;
    yield 100;
    yield 200;
    yield 300;
}
var ietrator = generator();
console.log(ietrator.next().value);
console.log(ietrator.next().value);