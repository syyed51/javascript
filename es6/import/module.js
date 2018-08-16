/* jshint esversion: 6 */
function greet(arg){
    console.log("Hello, ",arg);
}

function getSum(a,b){
    return a+b;
}

export function multiply(a,b){
    return a*b;
}

export {
    greet,
    getSum
};
export default greet;