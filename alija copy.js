// looping
// for(let i=0; i<12; i++){
//     console.log(i);
// }
// console.log('aliza acharya');
// for (let i = 1; i <= 10; i++)
// {
//     console.log(i);
// }
// let sum = 0;
// let i = 1;
// while (i <=100){
//     sum += i;
//     i++;
// }
// console.log("the sum of number from 1 to 100 is: ", sum);

// 
// let sum = 0;
// let i = 1;
// while (i <=100){
// if (i % 2!=0){
//     sum +=i;
// }
// i++;
// }
// console.log("the sum of odd numbers from 1 to 100 is:", sum);
// create an array storing value of multiple datatypes
// let mixedData = [
//     [1, "John", true],                
//     [2, "Mary", false],               
//     [3, "Chris", { age: 30, city: "NY" }] 
//   ];
  
  
//   console.log(mixedData[0][1]);        
//   console.log(mixedData[2][2].city);    
//   console.log(mixedData[1][2]);        
//   let a = ["saujal", 15, true];
//   let b = ["js", "python","java"];
//   console.log(typeof a);
// const name = "alija";
// let age= 22;
// const isStudent = true;
// let hobbies = ["reading", "cycling", "gaming"];
// let favouriteColors = ["blue", "green", "red"];
// let profile = {
//     name: name,
//     age: age,
//     isStudent: isStudent,
//     favouriteColors: favouriteColors,
//     hobbies: hobbies,
//     contact:{ 
//         email: "acharyaaliza79@gmail.com",
//     phone: "980-435-0092"
//     }
// };

// console.log("Name:", profile.name);
// console.log("Age:", profile.age);
// console.log("Is a student", profile.isStudent);
// console.log("\nfavourite colors:");
// for(let color of profile.favouriteColors){
// console.log("- " + color);
// }
// console.log("\nhobbies:");
// for(let hobbies of profile.hobbies);{
//     console.log("> " + hobbies);
// }
// console.log("contact Email:", profile.contact.email);

// let a = [1,2,3,4,5,6,7,8];
// console.log(a[3]);
// changing value inside the array
// let a = [0,1,2,3,[0,1,2,3],4,5,6,[0,1,2,3]];
// a[4][2] = 20;
// console.log(a);

// unshift
// let a = [1,2,3,4,5,6,7,8,9];
// a.unshift(3);
// console.log(a)

// shift
// let a = [1,2,3,4,5,6];
// a.shift();
// console.log(a);

// Push
// let a = [1,2,3,4,5,6];
// a.push(91);
// console.log(a);

// pop
// let a = [1,2,3,4,5,6];
// a.pop();
// console.log(a);

// index of 
// let a = [1,2,3,4,5,6];

// console.log(a.indexOf(4));

// let a = [1,2,3,4,5,6];
// console.log(a[3]);

// tostring
// let a = [1,2,3,4,5,6];
// a.toString();
// console.log(a);

// // includes

// let a = [1,2,3,4,5,6];
// console.log(a.includes(9));

// let b = [1,2,3,4];
// let c = b.includes(2);
// console.log(c);

// concat 
// let a = [1,2,3,4,5];
// let b = [6,7,8,9];
// console.log(a.concat(b));

// join 
// let a = [1,2,3,4,5];
// let b = [6,7,8,9];
// console.log(a.join(" "));


// let person = {
//     name: "alija",
//     age: 22,
//     grades: ["a", "b", "c", "d"],
//     greet: function() {
//         console.log(this.name);
//     }
// };
// console.log(person);

// let a = ["a", "b", "c", "d", "e", "f", "g", "h"];

// console.log(a.slice(1,5));

// let a = ["a", "b", "c", "d", "e", "f", "g", "h"];

// console.log(a.splice(1,5));

