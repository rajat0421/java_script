function a(a , b , c , d){
    this.a = a;
    this.b = b;
    this.c = c; 
    this.d = d;
    this.sum = function(){  
        return this.a + this.b + this.c + this.d + this.e;
    }
}

let i = new a(1,2,3,4);
console.log(i.sum());

a.prototype.e = 5;
let j = new a(1,2,3,4);
console.log(j.sum());

let y = new String("John");
y.age = 16;
console.log(y.String);
console.log(y.age);

let temp = "rajat";

console.log(temp.charCodeAt(0));
console.log(temp.substr(0, 2));
console.log(temp.substr(2));

let temp3 = temp.concat(" ",y.valueOf())
console.log(temp3);

temp3 = temp3.concat(" rajat");
console.log(temp3);

let temp4 = "a     raj    at     a";
console.log(temp4.trim());

let temp5 = "rajat";
temp5 =temp5.padStart(10,"*");
console.log(temp5);
temp5=temp5.padEnd(15,"*");
temp5=temp5.padEnd(20);
console.log(temp5);
console.log(temp5.trim());
console.log(temp5);

temp5 = temp5.padStart(30,"att");
console.log(temp5);

let text = "Please visit Microsoft, Microsoft!";
let newText = text.replace("Microsoft", "W3Schools");
console.log(newText);

let text2 = "Please visit Microsoft, Microsoft!";
let newText2 = text2.replace(/Microsoft/g, "W3Schools");
console.log(newText2);
temp6 = "rajat,rajat,rajat";
console.log(temp6.split(""));
console.log((temp6.split("")).length);
console.log(temp6.split(" "));
console.log(temp6.split(",")); 
console.log(temp6.split("|")); 
let ab = temp6.split("a");
console.log(ab);

let temp7 = "rajat       hahhaha    jajja "
console.log(temp7.split(" ").length);


let nu = 9.0;

console.log(nu.toFixed(0));

console.log("hello");

const arr = [1,2,3,4,5];


console.log(arr.join(" "));

arr.pop();
console.log(arr)



for ( val in arr ){
    console.log(val);
}