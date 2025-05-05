digits = [9];
let a = digits.length - 1;
 for ( let i = a ; i >= 0; i--){
     if (digits[i] < 9){
         digits[i]++;
         break;
     } else {
         digits[i] = 0;
     }
 }
 digits.unshift(1);
console.log( digits);

let status1 = "Part-time" 
let eNum = 31;
let eNum1 = 31;

if ( (status1 == "Full-time" || status1 == "Part-time") && (eNum == eNum1)) {
    console.log("added");
}

let arr = [7,1,5,4,6,3];
let max = 0;
let price = arr[0];
 for(i in arr){
    if ( i > price){
        price = i;
    }
    max = Math.max(max, price - max);
 }
 console.log(max);
                
mb = [1,2,3,4,5];   
console.log(mb);