// Business Logic
function Pizza(size, toppings, price) {
  this.size = size;
  this.toppings = [];
  this.price = price;
}

// Delete Later
var myPizza = new Pizza()
//  

Pizza.prototype.sizeCalculator = function (inputSize) {
  this.size = inputSize
};

Pizza.prototype.addToppings = function (inputTopping) {
  this.toppings.push(inputTopping);
}

Pizza.prototype.findPrice = function () {

};

// User Logic
$(document).ready(function() {

})
