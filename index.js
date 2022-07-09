
var a;
a=10;
console.log(typeof a);
console.log(a);

// "",' ',''
//double quotes,single quotes,backtick

a='puru';
console.log(typeof a);

a=null;
console.log(typeof a);
console.log(a);

//boolean
var t=true;
var f=false;
console.log(t);
console.log(f);

var str='a';
console.log(typeof str);
str="how you doin? \ni am fine .how about you?";
console.log(str);

var b=`hy hope you guys are also 
cool healthy`;
console.log(b);

var num=500;
console.log(`half of ${num} is ${num/2}`);

let l =200;
console.log(l);

// let l="200"; // Identifier 'l' has already been declared
// console.log(l);
// we can reinitialize a variable but we can't redeclare it
l=200;
console.log(l);

//for loop
//for prime number

var num = 10;
for(var i=1;i<num;i++){
    if(i%2==0){
        console.log("number is even");
    }
}
const c=2;
console.log(c);

//na hi redeclare na hi reintialize
c=4;
console.log("hey"); //Assignment to constant variable.