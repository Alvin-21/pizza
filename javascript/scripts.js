// Business Logic
$(document).ready(function(){
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

        // User Interface
        $("#order").show();
        $("#size-price").append(sizePrice);
        $("#crust-price").append(crustPrice);
        $("#topping-price").append(totalToppingPrice);
        $("#total-price").append(totalPrice());
    });
});