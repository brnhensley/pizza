var myPizza = new Pizza();

// Business Logic
function Pizza(size, toppings, price) {
  this.size = size;
  this.toppings = [];
  this.price = price;
}


Pizza.prototype.sizeCalculator = function (inputSize) {
  this.size = inputSize;
};

Pizza.prototype.addToppings = function (inputTopping) {
  this.toppings.push(inputTopping);
}

Pizza.prototype.findPrice = function () {
  if (this.size === "Small") {
    this.price = 6;
  } else if (this.size === "Medium") {
    this.price = 10;
  } else {
    this.price = 14;
  }
  if (this.toppings.length > 0) {
    this.price += this.toppings.length;
  }
  return this.price;
};

// User Logic
$(document).ready(function() {

})
