var friendsAge = [12, 14, 15, 16, 17, 20];

var someneAge = friendsAge[2]; // access array element 

friendsAge[3] = 29;   //update array 

var position = friendsAge.indexOf(20); //to know a position of an element

var position2 = friendsAge.indexOf(290); // if it's not exist then it will show -1

friendsAge.push(23); //add a new element

friendsAge.pop(); //remove last element

friendsAge.unshift(17, 92); //Add new items to the beginning of an array

friendsAge.shift(); //remove first element

console.log(friendsAge.length); //length of whole array

console.log(friendsAge);