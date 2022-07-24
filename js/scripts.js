//Business Logic

function Pizza(size, toppings) {
    this.size = size;
    this.toppings = toppings;
    this.price = 0;
}

let pizzaOrder = new Pizza();

Pizza.prototype.pieCost = function() {
    if (this.size === "small") {
        this.price += 1000;
    } else if (this.size === "medium") {
        this.price += 1200;
    } else if (this.size === "large") {
        this.price += 1400;
    }    
    this.price += this.toppings * 50;
    return this.price;
}


//User Interface Logic

window.addEventListener("load", function(){
    const form = document.getElementById("pizza")
    const submitButton = document.getElementById("price-btn")
    const resetBtn = document.getElementById("reset")

    form.addEventListener("submit", function(event){
        event.preventDefault();

        let size = document.querySelector("input[name='pizza-size']:checked"); 
        toppingArray = [];
        const onTop = document.querySelectorAll("input[name='topping']:checked");
        onTop.forEach(toppings => {
            toppingArray.push(toppings.value);
        });  
        let price= pizzaOrder.pieCost()
        const result = price;
        submitButton.setAttribute('disabled', 'disabled');
        (document.getElementById("price").innerText = result);

    })
    resetBtn.addEventListener('click', function () {
        document.getElementById('pizza').reset();
        submitButton.removeAttribute('disabled');
        document.getElementById('beep-boop').innerText = '';
    });

})
