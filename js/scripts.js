//Business Logic

function Pizza(size, toppings) {
    this.size = size;
    this.toppings = toppings;
    this.price = 0;
}

let pizzaOrder = new Pizza()

Pizza.prototype.sizeCost = function() {
    if (pizzaOrder.size === "small") {
        this.price += 1000.00;
    } else if (pizzaOrder.size === "medium") {
        this.price += 1200.00;
    } else if (pizzaOrder.size === "large") {
        this.price += 1400.00;
    }    
    return pizzaOrder.price;
}


//User Interface Logic

window.addEventListener("load", function(){
    const form = document.getElementById("pizza")
    const submitButton = document.getElementById("price-btn")
    const resetBtn = document.getElementById("reset")

    form.addEventListener("submit", function(event){
        event.preventDefault();

        const result = pizzaOrder.price;
        (document.getElementById("price").innerText = result);

    })

})
