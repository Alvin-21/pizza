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
    });
});