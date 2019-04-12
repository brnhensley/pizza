// Business Logic  ------------------------------------


function Pizza(size, toppings, price) {
  this.size = size;
  this.toppings = [];
  this.price = price;
}

Pizza.prototype.sizeCalculator = function (inputSize) {
  this.size = inputSize;
};

Pizza.prototype.addToppings = function (inputTopping1, inputTopping2, inputTopping3) {
  if (inputTopping1 !== "") {
    this.toppings.push(inputTopping1);
  }
  if (inputTopping2 !== "") {
    this.toppings.push(inputTopping2);
  }
  if (inputTopping3 !== "") {
    this.toppings.push(inputTopping3);
  }
  console.log(this.toppings);
}

Pizza.prototype.findPrice = function () {
  if (this.size === "Small") {
    this.price = 6;
    this.price += this.toppings.length;
  } else if (this.size === "Medium") {
    this.price = 10;
    this.price += (this.toppings.length * 2);
    console.log(myPizza.price);
    console.log(this.toppings.length);
  } else if (this.size === "Large"){
    this.price = 14;
    this.price += (this.toppings.length * 3);
  } else {
    this.price = 40;
    this.price += (this.toppings.length * 5);
  }
  return this.price;
};



// User Interface Logic -------------------------------
$(document).ready(function() {
  $("form#new-order").submit(function(event) {
    event.preventDefault();
    var inputSize = $("select.new-pizza-size").val();
    var inputTopping1 = $("select.new-topping1").val();
    var inputTopping2 = $("select.new-topping2").val();
    var inputTopping3 = $("select.new-topping3").val();
    var myPizza = new Pizza(inputSize, inputTopping1, inputTopping2, inputTopping3, 0)
    myPizza.addToppings(inputTopping1, inputTopping2, inputTopping3)
    myPizza.findPrice();
    console.log(myPizza);
    return myPizza;

    // $("#toppings-form").show();
    // $("form#new-order").hide();
  });
})

// Delete after testing
var myPizza = new Pizza();
console.log(myPizza);
//

// var inputToppings = $("").val();

// This function listens for clicks on toppings
// function attachToppingListeners() {
//   $()
//   // On click the toppings should appear on the page in a list under order size.  On submit the price should appear
// }
//
// // Shows the final order to the user
// function showOrder() {
//
// }
