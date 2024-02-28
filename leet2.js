
var addTwoNumbers = function (l1, l2) {
    let sum , one ,two,lf,ls
    lf=l1
    ls=l2
    if (l1.length && l2.length == 1) {
        if (l1[0] == 0 && l2[0] == 0) {
            return 0;
        }
        else{
            sum = l1[0]+l2[0]
            sum =Array.from(String(sum),Number)
            sum =[...sum].reverse();
            return sum
        }
    }
    one=[...lf].reverse();
    two=[...ls].reverse();
     one =parseInt(one.join(''), 10)
     two =parseInt(two.join(''), 10)
     sum = one + two
     console.log(one);
     sum =Array.from(String(sum),Number)
     sum =[...sum].reverse()
     return sum
}


console.log(addTwoNumbers([9,9,9,9,9,9,9],[9,9,9,9]));
