// var arr=[5,6,7,8,5,5];
// var obj={}
// var max=-Infinity;
//  var bag="";

// for (var i=0;i<arr.length;i++){
//     var char=arr[i]
//    if(obj[char]===undefined){
      
//           obj[char]=1    
//    }else{
//     obj[char] = obj[char] +1
//    }
// }

// console.log(obj);
// for(var key in obj){
//     if(obj[key]>max){
//         max=obj[key]
//         bag=key
//     }
// }
// console.log(bag);


// var arr=[12,34,11,9,18];
// var left=0;
// var right=arr.length-1;


// function swap(arr,right,left){
//    let temp=arr[right]
//    arr[right]=arr[left]
//    arr[left]=temp
// }

// while(left<right){
//     swap(arr,left,right)
//     left++;
//     right--;
// }
// console.log(arr);




// var arr=["A","B","A","B","A","B","B"]
// var bag="";
// var obj={};
// var max=-Infinity;
// for (var i=0;i<arr.length;i++){
//     var str=arr[i]
//     if(obj[str]==undefined){
//         obj[str]=1;
//     }
//     else{
//         obj[str]=obj[str]+1
//     }
// }

// for(var key in obj){
//     if(obj[key]>max){
//         max=obj[key]
//         bag=key
//     }
// }
// console.log(bag);

var arr=[5,6,7,8,5,5];
var obj={}
var max=-Infinity;
 var bag="";

for (var i=0;i<arr.length;i++){
    var char=arr[i]
   if(obj[char]===undefined){
      
          obj[char]=1    
   }else{
    obj[char] = obj[char] +1
   }
}

console.log(obj);
for(var key in obj){
    if(obj[key]>max){
        max=obj[key]
        bag=key
    }
}
console.log(bag);