// Business Logic  ------------------------------------

// Pizza constructor
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
  if (this.size === "small") {
    this.price = 6;
    this.price += this.toppings.length;
  } else if (this.size === "medium") {
    this.price = 10;
    this.price += (this.toppings.length * 2);
    console.log(this.price);
    console.log(this.toppings.length);
  } else if (this.size === "large"){
    this.price = 14;
    this.price += (this.toppings.length * 3);
  } else {
    this.price = 40;
    this.price += (this.toppings.length * 5);
  }
  return this.price;
};

// Shows the final order to the user
function showOrder(size, toppings, price) {
  console.log(toppings.join(""));
  var toppingsString = toppings;
  $("form#new-order").hide();
  $("span#before-order").hide();
  $(".order-summery").show();
  $("#show-size").append(size);
  $("#show-price").append(price);
  if (toppings.length > 0) {
    $("#no-toppings").hide();
    $("#show-toppings").show();
    var orderToppingsList = $("ul#toppings-list");
    htmlListToppings = "";
    toppings.forEach(function(element) {
      htmlListToppings += "<li>" + element + "</li>";
    });
    console.log(htmlListToppings);
    orderToppingsList.html(htmlListToppings);
  }
}

// User Interface Logic -------------------------------

var myPizza = new Pizza();

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
    showOrder(myPizza.size, myPizza.toppings, myPizza.price);
    return myPizza;
  });
})
