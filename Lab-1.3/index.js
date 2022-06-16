//Bai 1
let a, b;

a = Number(prompt("Enter a : "));
b = Number(prompt("Enter b : "));

if (a* b > 0)
    console.log("A has same sign with b");
else console.log("A does not have same sign with b")

//Bai 2
let month;
//cach 1
// while (month< 1 || month > 12) {
//     month = Number(prompt("Enter month : "));
// }
month = Number(prompt("Enter month : "));
switch (month) {
    case 1:
    case 2:
    case 3:
        console.log("Month is first quarter");
        break;
    case 4:
    case 5:
    case 6:
        console.log("Month is second quarter");
        break;
    case 7:
    case 8:
    case 9:
        console.log("Month is third quarter");
        break;
    case 10:
    case 11:
    case 12:
        console.log("Month is fourth quarter");
        break;
    //cach 2
    default:
        console.log("Invalid month");
        break;
}
//Bai 3 
let n;
n = Number(prompt("Enter n : "));
let sum =0;
let i;

for (i = 1; i <=n; i ++) {
    sum += i;
}

//Bai 4
let n;
n = Number(prompt("Enter n : "));
let sum =0;
let i;

for (i = 2; i <=n; i += 2) {
    sum += 1/i;
}

//Bai 5
let n, x;
n = Number(prompt("Enter n : "));
x = Number(prompt("Enter x : "));
let T = 1;
let i;

for (i =1; i<=n; i++){
    T *= x;
}
