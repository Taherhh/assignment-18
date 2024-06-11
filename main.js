// assignment 18
var placeToVisit = ["Paris", "Usa", "Rome", "Italy", "China"];
// print in original order
console.log("Original order:", placeToVisit);
// print array in alphabetical order without modifying the actual list
console.log("Alphabetical order:", placeToVisit.slice().sort());
// show that your array is still in its original order by printing it
console.log("Original order:", placeToVisit);
// print array in reverse alphabetical order without changing the order of the original list
console.log("Reverse Order:", placeToVisit.slice().sort().reverse());
// array is still in its original order by printing it again
console.log("Original order:", placeToVisit);
// reverse the order of your list. Print the array to show that its order has changed
console.log("Reverse Order Changed");
placeToVisit.reverse();
console.log(placeToVisit);
// reverse the order of your list again. Print the list to show it's back to its original order
console.log("Original order:", placeToVisit.sort());
console.log(placeToVisit);
// sort to changed your array so it's stored in alphabetical order. Print the list to show that its order has been changed
console.log("Reverse Alphabetical Order Changed:", placeToVisit.sort().reverse());
console.log(placeToVisit);
