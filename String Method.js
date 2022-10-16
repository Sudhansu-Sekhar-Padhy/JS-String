//JavaScript String Method
let text1 = 'Laxmi'
let text2 = 'Narayan';
let text3 = '  Hari Bol  '
//Concatenating
let result1 = text1.concat(' ',text2);
console.log(result1);//Laxmi Narayan

//Uppercase
let result2 = text1.toUpperCase();
console.log(result2);//LAXMI

//Removing Whitespace
let result3 = text3.trim();
console.log(result3);//Hari Bol

//string to Array
let result4 = text1.split();
console.log(result4);//[ 'Laxmi' ]

//slicing the string
let result5 = text1.slice(1,3)
console.log(result5);//ax

