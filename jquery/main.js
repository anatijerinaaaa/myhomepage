$(".dark-btn").click(function(){
  $(".container").toggleClass("dark");
$(".box").toggleClass("dark")
}
);

$(".spin-btn").click(
    function(){
        $(".box").toggleClass("spin");
    }

);

$(".reveal-btn").click(
    function(){
        // $(".chair").addClass("reveal");
        // $(".chair").css("display", "block")
        $(".chair").show();
        $(".reveal-btn").hide();
        
    }


)
// $( ".chair" ).draggable();
$( ".draggable" ).draggable({

    containment: ".container",
    scroll: false, 
    snap:true,
    grid: [40,40]
    
}

);
