let n=8
let count=0
let i=1
while (i<=n){
  if (n%i==0) {
    count+=1
  }
  i++  
}
if (count ==2){
  console.log("Tub son");
}
else{
  console.log("Tub son emas");
}