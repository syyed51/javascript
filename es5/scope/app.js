
// test 1
(function fun() {
    console.log("-------------------start");
    console.log(name);
    var name = "Tehseen";
    console.log(name);
    console.log("-------------------end");
}());


// test 2
(function fun() {
    console.log("-------------------start");
    console.log(name);
    if (true){
        var name = "Tehseen";
    }
    console.log(name);
    console.log("-------------------end");
}());