var arr = [6, 5, 8, 3, 4, 2, 7, 1, 10, 9]


// bubble sort -------------------------------------------------------------------------------

//var i ,j ,temp , length = arr.length-1
// for(i =0 ; i<= length ;i++)
// {
//   for(j = 0 ; j <= length-i ; j++)
//   {
//      if(arr[j]>arr[j+1]){
//       temp = arr[j]
//       arr[j]=arr[j+1]
//       arr[j+1]= temp
//      }
//   }
// }


//insertion sort -------------------------------------------------------------------------

//var i ,j ,temp , length = arr.length-1
// for(i=0 ; i<= length; i++)
// {
//   for(j=i+1;arr[j]>arr[j-1];j--)
//   {
//     temp = arr[j]
//     arr[j]=arr[j-1]
//     arr[j-1]= temp
//   }
// }

//merge sort -------------------------------------------------------------------------------------

// function merge(a)
// {
//   var length = a.length
//   if (length<= 1)
//   {
//     return a
//   }
//   var left =[] , right = []
//   var mid = Math.floor(length/2)
//   left = a.slice(0,mid)
//   right =a.slice(mid)
//   return merg(merge(left),merge(right))
// }

// function merg(lef,righ)
// {
//   var z =[]
//    while(lef.length && righ.length)
//    {
//     if(lef[0]<righ[0])
//     {
//       z.push(lef.shift())
//     }
//     else
//   {
//     z.push(righ.shift())
//   }
//    }
//    return [...z,...lef,...righ]
// }

// console.log(merge(arr));

// quick sort----------------------------------------------------------------------------------------------------------

// function quick(a)
// {
//   console.log("===",a);
  
//   var length = a.length
//   if (length<=1)
//   {
//     return a
//   }
//   var left =[],right = []
//   var mid = Math.floor(length/2)
   
//   for(var i=0 ;i<length;i++)
//   {
//     if(a[i]<a[mid])
//     {
//       left.push(a[i])
//     }
//     else if(a[i]>a[mid])
//     {
//       right.push(a[i])
//     }
//     else{
//       continue;
//     }
    
//   }
//   return [...quick(left),a[mid],...quick(right)]
// }
//  console.log(quick(arr));
