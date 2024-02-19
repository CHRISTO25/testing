
var addTwoNumbers = function (l1, l2) {
    let sum 
    if (l1.length && l2.length == 1) {
        if (l1[0] == 0 && l2[0] == 0) {
            return 0;
        }
        else{
            sum = l1[0]+l2[0]
            sum =Array.from(String(sum),Number)
            console.log(sum);
        }
    }


}


console.log(addTwoNumbers([11], [10]));
