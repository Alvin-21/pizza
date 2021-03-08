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
                    // console.log(toppings[topping]);
                });
                break;
            
            case 700:
                var toppings = [];
                $("input[type='checkbox'][name='toppings']:checked").each(function (topping) {
                    toppings[topping] = 40;
                    // console.log(toppings[topping]);
                });
                break;
            
            case 1000:
                var toppings = [];
                $("input[type='checkbox'][name='toppings']:checked").each(function (topping) {
                    toppings[topping] = 60;
                    // console.log(toppings[topping]);
                });
                break;
        
            default:
                break;
        }

        // console.log(toppings[0]);
    });
});