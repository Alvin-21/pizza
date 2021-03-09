// Business Logic
$(document).ready(function(){
    var orders = [];
    var orderId = 1;
    $("form #place-order").click(function(e){
        e.preventDefault();
        var sizePrice = parseInt($("input[type='radio'][name='size']:checked").val());
        var crustPrice = parseInt($("#crust").val());
        
        switch (sizePrice) {
            case 400:
                var toppings = [];
                $("input[type='checkbox'][name='toppings']:checked").each(function (topping) {
                    toppings[topping] = 20;
                });
                break;
            
            case 700:
                var toppings = [];
                $("input[type='checkbox'][name='toppings']:checked").each(function (topping) {
                    toppings[topping] = 40;
                });
                break;
            
            case 1000:
                var toppings = [];
                $("input[type='checkbox'][name='toppings']:checked").each(function (topping) {
                    toppings[topping] = 60;
                });
                break;
        
            default:
                break;
        }

        var totalToppingPrice = 0;
        toppings.forEach(function(topping) {
            totalToppingPrice += topping;
        })
        function totalPrice(pizzaSize, crust, totalTopping) {
            pizzaSize = sizePrice;
            crust = crustPrice;
            totalTopping = totalToppingPrice;
            return pizzaSize + crust + totalTopping;
        }
        totalPrice();

        function Pizza(orderNumber,sizeAmount, crustAmount, totalToppingAmount) {
            this.orderNumber = orderNumber;
            this.sizeAmount = sizeAmount;
            this.crustAmount = crustAmount;
            this.totalToppingAmount = totalToppingAmount;
        }
        
        
        var pizza = new Pizza(orderId, sizePrice, crustPrice, totalToppingPrice);
        orders.push(pizza);
        console.log(orders);
        orderId += 1;
        // User Interface
        $("#order").show();
        $("#size-price").append(sizePrice);
        $("#crust-price").append(crustPrice);
        $("#topping-price").append(totalToppingPrice);
        $("#total-price").append(totalPrice());
    });

    $("form #add").click(function(e) {
        e.preventDefault();
        document.forms[0].reset();
        $("#size-price").remove();
        $("#crust-price").remove();
        $("#topping-price").remove();
        $("#total-price").remove();
        $("#order").append('<p id="size-price">Price of the size of pizza = </p>');
        $("#order").append('<p id="crust-price">Price of the crust = </p>');
        $("#order").append('<p id="topping-price">Price of the total toppings = </p>');
        $("#order").append('<p id="total-price">Total Price for the order = </p>');
        $("#order").hide();
        
    });
    
    $("#yes").click(function() {
        alert("The delivery fee is Ksh. 100");
        $("#location").show();
    });

    $("#checkout").click(function (e) {
        e.preventDefault();
        var delivered = $("input[type='radio'][name='delivery']:checked").val();
        if (delivered == "yes") {
            alert("Your order will be delivered to your location. 😌");
        }
    });
});