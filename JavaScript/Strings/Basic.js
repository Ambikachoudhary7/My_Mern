let str = "  i love coding  ";
console.log(str[7]);
console.log(str);
// String:- string is immutable it doesnot allow to modified, even if modified and apply any method it creat new String and old actual string will be same.
str.trim();
console.log(str);
console.log(str.split(' ')); // it sepreate string words
console.log(str.toLowerCase()); // it conver string into lower case
console.log(str.toUpperCase()); // it convert string into upper case
console.log(str.trim().toUpperCase()) // we can also use multiple methods at one time , but it work left to right
console.log(str.slice(1, 6)); // it return particular part of string
console.log(str.slice(-6)); // it subtract total length - 6 and return value
console.log(str.replace("coding", "maths")); // it use to replace particular word to new word
console.log(str.repeat(3)); // it repeat same string multiple times
console.log(typeof(str));