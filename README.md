# Tests 

Describe: Pizza ()

Test: It should return the Pizza object with the properties for size and one topping
Code: const userPizza = new Pizza("medium", "jalapenos")
Expected Output: Pizza {size: "medium", toppings: "jalapenos"}

Test: It should return 3 properties for the Pizza object, size, toppings, and price
Code userPizza = new Pizza("large",["jalapenos", "pepperoni", "mushrooms"])
Expected output: Pizza {size: "large", toppings: ["jalapenos", "pepperoni", "mushrooms"] price:0}


Describe sizeCost()

Test: It should return the cost of the pizza based off of the crust size
Code: const pizzaOrder = new Pizza("medium", "jalapeno")
Expected Output: Pizza {size: "medium", toppings: "jalapenos", price: 1200}