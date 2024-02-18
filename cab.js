// call--------------------------------------------

// var obj = {
//     name: "christo"
// }

// var obj2 ={

//     name:"zntra",
//     fun : function(){

//         console.log("Hi "+this.name);
//     }
// }

// obj2.fun.call(obj)

// apply----------------------------------------------
// var obj = {
//     name :"christo"
// }

// var obj2 = {
//     name:"zntra",
//     fun:function (age,number)
//     {
//         console.log("Hi "+this.name+" your age is "+age+" and number is "+number);
//     }
// }

// obj2.fun.apply(obj,[22,7306218158])


// bind--------------------------------------------------

var obj ={
    name:"christo"
}

var obj2={
    name : "zntra",
    fun:function(){
        console.log(this.name);
    }
}

  let Hi  = obj2.fun.bind(obj)

  Hi()