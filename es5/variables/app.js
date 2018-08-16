// you'll need the util module
var util = require('util');

var a;
console.clear();
inspect(a);
a = 10;
inspect(a);
a = {};
inspect(a);
a = "Hello";
inspect(a);
a = null;
inspect(a);
a = undefined;
inspect(a);
a = Symbol;
inspect(a);




function inspect(v) {
    console.log("\x1b[31m -------------start-----------------"); //red
    console.log("\x1b[37m type:", typeof v);    //white
    console.log("\x1b[37m value:", v);          // white
    console.log("\x1b[32m -------------end-----------------");  //green
    console.log("\x1b[0m");// reset colors
}
