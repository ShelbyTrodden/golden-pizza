//Business Logic

function Pizza(size, toppings) {
    this.size = size;
    this.toppings = toppings;
}

Pizza.prototype.pieCost = function() {
    let sizePrice=0
    let toppingPrice= this.toppings.length
    if (this.size === "small") {
        this.price += 1000;
    } else if (this.size === "medium") {
        this.price += 1200;
    } else if (this.size === "large") {
        this.price += 1400;
    }    
    let totalPrice= sizePrice + toppingPrice;
    return totalPrice;
}


//User Interface Logic

window.addEventListener("load", function(){
    const form = document.getElementById("pizza")
    const submitButton = document.getElementById("price-btn")
    const resetBtn = document.getElementById("reset")

    form.addEventListener("submit", function(event){
        event.preventDefault();

        let inputSize = document.querySelector("input[name='pizza-size']:checked"); 
        toppingArray = [];
        const onTop = document.querySelectorAll("input[name='topping']:checked");
        onTop.forEach(toppings => {
            toppingArray.push(toppings.value;
        });  
        let pizzaOrder = new Pizza(inputSize, toppingArray);
        let totalPrice= pizzaOrder.pieCost()
        const result = totalPrice;
        submitButton.setAttribute('disabled', 'disabled');
        (document.getElementById("price").innerText = ("$" + result + ".00"));

    })
    resetBtn.addEventListener('click', function () {
        document.getElementById('pizza').reset();
        submitButton.removeAttribute('disabled');
        document.getElementById('price').innerText = '';
    });

})
