var year = 1254;
var year = parseInt(year);
console.log(year);

if (year % 100 != 0 && year % 4 == 0) {
    console.log("It's a leap year");
}
else if (year % 100 == 0 && year % 400 == 0) {
    console.log("It's a leap year");
}
else{
    console.log("It's not a leap year");
}
