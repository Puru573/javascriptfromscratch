let obj={}; //empty object
console.log(obj);

let person={
    name:"puru",
    age:22,
    phone:000000000,
    gender:"Male",
    height:"178 cm"

};
console.log(`Hey ${person.name}, thank you for sign up `);
console.log(person.gender);
console.log(person["gender"]);

let str ="hello";
console.log(str.length); //dot notation
console.log(str["length"]);  //sq bracket notation

let captainAmerica={
    firstName:"Steve",
    LastName:"Rogers",
    friends:["Bucky","Tony Stark","Bruce Banner"],
    age:102,
    address:{
        state:"Manhattan",
        city:"New York",
        country:"USA"
    },
    sayHi:function(){
        console.log(`Hello my name is ${this.firstName}`);
    }
};
console.log(captainAmerica);
console.log(captainAmerica.friends);
console.log(captainAmerica.friends[0]);
console.log(captainAmerica.sayHi());//method accessing
