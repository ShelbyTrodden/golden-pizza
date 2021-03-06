//Business Logic

function Pizza(size, toppings) {
    this.size = size;
    this.toppings = toppings;
    this.price = 0;
}

Pizza.prototype.pieCost = function() {
    let sizePrice=0;
    let toppingPrice= this.toppings.length;
    if (this.size === "small") {
        sizePrice +=1000;
    } else if (this.size === "medium") {
        sizePrice +=1200;
    } else if (this.size === "large") {
        sizePrice +=1400;
    }    
    this.price = (sizePrice + toppingPrice*50);
}


//User Interface Logic

window.addEventListener("load", function(){
    const form = document.getElementById("pizza")
    const submitButton = document.getElementById("price-btn")
    const resetBtn = document.getElementById("reset")

    form.addEventListener("submit", function(event){
        event.preventDefault();

        let inputSize = document.querySelector('input[name="pizza-size"]:checked').value; 
        toppingArray = [];
        const onTop = document.querySelectorAll("input[name='toppings']:checked");
        onTop.forEach(toppings => {
            toppingArray.push(toppings.value);
        });  
        let pizzaOrder = new Pizza(inputSize, toppingArray);
        pizzaOrder.pieCost()
        submitButton.setAttribute('disabled', 'disabled');
        (document.getElementById("price").innerText = ("$" + pizzaOrder.price + ".00"));

    })
    resetBtn.addEventListener('click', function () {
        document.getElementById('pizza').reset();
        submitButton.removeAttribute('disabled');
        document.getElementById('price').innerText = '';
    });

})
