let f =["rajat","a","rajat","rajat","a","rajat"];
let l = ["talekar","patil","talekar","patil","patil","talekar"];
let u = [];
 
    for(let i = 0; i < f.length; i++){
        userName = f[i][0] + l[i].substring(0,6);
        u.push(userName);
    }
    console.log(u);
let nC = {};
let result = [];

    u.forEach(name => {
    if (nC[name] === undefined) {
        nC[name] = 0;
        result.push(name); 
    } else {
        nC[name]++;
        result.push(name + nC[name]);
    }
    });
// console.log(u);
// console.log(nC);
console.log(result);

nc = {
 rtaler : 0,
 apatil : 0,
 
};