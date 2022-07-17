# Golden Pizza

#### By _**Shelby Trodden**_

#### _Pizza Order Form_


## Technologies Used

* HTML
* CSS
* Javascript


## Description
_This is a webpage for a pizza restaurant. User makes their selections to get the cost of their pizza. _

## Setup/Installation Requirements
* Clone this repository to your desktop
* Navigate to the top level of the directory
* Open golden-pizza/index.html in your browser

## Known Bugs
* No known issues

## License

If you run into any bugs, please contact me at shelby.trodden@gmail.com

[MIT License](/LICENSE.txt)

Copyright (c) [2022] [Shelby Trodden]
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