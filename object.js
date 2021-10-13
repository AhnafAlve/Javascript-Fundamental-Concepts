var student1 = {id: 901226, name: "Ahnaf Alve", address:"Dhaka" };
var student2 = {id: 12345, name: "someone", address:"Silicon vally" };

// access objects property (3 ways)
var address1 = student1.address; //way no 1
var address2 = student2["address"]; //way no 2

var addressAccess3 = "address"; // way no 3
var address3 = student1[addressAccess3];

//update data (3 ways)
student1.address = "Australia";
student1["address"] = "England";
student1[addressAccess3] = "Turkey";

// add new property
student1.phone = 01765435;

console.log(student1);
