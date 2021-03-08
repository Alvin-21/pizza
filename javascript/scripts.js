// Business Logic
$(document).ready(function(){
    $("form #place-order").click(function(e){
        var sizePrice = parseInt($("input[type='radio'][name='size']:checked").val());
        // console.log(sizePrice);
        // console.log(typeof sizePrice);
        var crustPrice = parseInt($("#crust").val());
        // console.log(crustPrice);
        // console.log(typeof crustPrice);
        e.preventDefault();

        var tomatoes = parseInt($("#tomatoes").val());
        var onions = parseInt($("#onions").val());
        var avacados = parseInt($("#avacados").val());
        var chilli = parseInt($("#chilli").val());
        var cheese = parseInt($("#cheese").val());
        var olives = parseInt($("#olives").val());
        var pineapples = parseInt($("#pineapples").val());
        var pepperoni = parseInt($("#pepperoni").val());
        var chicken = parseInt($("#chicken").val());
        var beef = parseInt($("#beef").val());
        var bacon = parseInt($("#bacon").val());
        var mushroom = parseInt($("#mushroom").val());

        var toppings = [tomatoes, onions, avacados, chilli, cheese, olives, pineapples, pepperoni, chicken, beef, bacon, mushroom];
        
        switch (sizePrice) {
            case 400:
                toppings.forEach(function(topping) {
                    topping = 20;
                    console.log(topping);
                });
                break;
            
            case 700:
                toppings.forEach(function(topping) {
                    topping = 40;
                    console.log(topping);
                });
                break;
            
            case 1000:
                toppings.forEach(function (topping) {
                    topping = 60;
                    console.log(topping);
                });
                break;
        
            default:
                break;
        }
    });
});