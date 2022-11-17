let a=81
let b=3
let count =1
while(3){
  b*=3
  count+=1
  if(b==a) {
    console.log(`${a} soni 3ni darajasi. Daraja ${count} ga teng`);
    break
  }
  else if(a<b){
    console.log(`3 ni darajasi emas`);
    break
  }
}
