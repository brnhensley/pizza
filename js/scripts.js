// Business Logic  ------------------------------------


function Pizza(size, toppings, price) {
  this.size = size;
  this.toppings = [];
  this.price = price;
}

// Creates topping array
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
}

// Price calculator
Pizza.prototype.findPrice = function () {
  if (this.size === "Small") {
    this.price = 6;
    this.price += this.toppings.length;
  } else if (this.size === "Medium") {
    this.price = 10;
    this.price += (this.toppings.length * 2);
    console.log(this.price);
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

// Shows the final order to the user
Pizza.prototype.showOrder = function() {
  console.log(myPizza);
  $("form#new-order").hide();
  $("span#before-order").hide();
  $(".order-summery").show();
}

// User Interface Logic -------------------------------

var myPizza = new Pizza();

// User Interface Logic -------------------------------

$(document).ready(function() {
  $("form#new-order").submit(function(event) {
    console.log("hi");
    event.preventDefault();
    var inputSize = $("select.new-pizza-size").val();
    var inputTopping1 = $("select.new-topping1").val();
    var inputTopping2 = $("select.new-topping2").val();
    var inputTopping3 = $("select.new-topping3").val();
    var myPizza = new Pizza(inputSize, inputTopping1, inputTopping2, inputTopping3, 0)
    myPizza.addToppings(inputTopping1, inputTopping2, inputTopping3)
    myPizza.findPrice();
    myPizza.showOrder();
    console.log(myPizza);
    return myPizza;
  });
})

// DELETE THIS
// $(document).ready(function() {
  //   $("form#new-order").submit(function(event) {
    //     event.preventDefault();
    //     var inputSize = $("select.new-pizza-size").val();
    //     inputSize = sizeCalculator(inputSize)
    //     console.log(inputSize);
    //     var myPizza = new Pizza(inputSize)
    //     $("#toppings-form").show();
    //     $("form#new-order").hide();
    //   });
    // })
