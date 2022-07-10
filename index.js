
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

// var num = 10;
// for(var i=1;i<num;i++){
//     if(i%2==0){
//         console.log("number is even");
//     }
// }
const c=2;
console.log(c);

//na hi redeclare na hi reintialize
// c=4;
console.log("hey"); //Assignment to constant variable.
// 2nd problem with var keyword
// var keyword is function scoped is case of function else it is global scope
// let keyword is block scoped

let j=20;//goloal define
var num=10;
for(var i=0;i<num;i++){
    let j=20;
    if(i%2==0){
        var hello=1000;
        console.log(i);
    }
  
   
    console.log("inner"+j);
}
console.log("outer"+j);
console.log("value of i is " + i);
console.log(hello);

//function expression
let sayhi=function abcd(){
    console.log("hello guys i am an functional expression");
}
console.log("line 54\n" + sayhi); //ye jis func ke andar ke wrap he ye us pure funtion ko print krwayega
sayhi();//sayhi var ne apna o/p print krwa dya

function calculator(str,a,b){
    if(str=="add"){
        return function add(){
            console.log(a + b);
        }
    }
}
let returnedfun=calculator("add",2,3);
console.log("returned function is\n"+
returnedfun);
returnedfun();