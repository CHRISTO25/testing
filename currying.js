let first = function(x){
    return function (y){
        console.log("Answer is = "+x*y);
    }
}

let second = first(5)
second(2)