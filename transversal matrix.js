var arr=[
[1,2,3,4],
[5,6,7,8],
[9,10,11,12],
[13,14,15,16],
];

var n=4;
 var m=4;
var top=0;
 var bottom= n-1;
 var left= 0;
var right= m-1;
var count= 0;
 
while (count<n*m){
for(var i=top;i<=bottom;i++){
    console.log(arr[i][left])
}
left++;
for(var i=left;i<=right;i++){
    console.log(arr[bottom][i]);
}
bottom--;
for(var i=bottom;i>=top;i--){
    console.log(arr[i][right])
}
right--;
for(var i=right;i>=left;i--){
    console.log(arr[top][i])
}
top++;
}