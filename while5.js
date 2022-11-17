let a=16
let b=2
let count =1
while(2){
  b*=2
  count+=1
  if(b==a) {
    console.log(`${a} soni 2ni darajasi. Daraja ${count} ga teng`);
    break
  }
  else if(a<b){
    console.log(`2 ni darajasi emas`);
    break
  }
}
