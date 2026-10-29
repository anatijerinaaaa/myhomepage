$(".lotus-icon").draggable();
$(".draggable").draggable({
    
    containment:".container",
    scroll:false,
    snap:true,
    grid:[20,20]
   

}
);

$(".tree-icon").draggable();
$(".draggable").draggable({
    
    containment:".container",
    scroll:false,
    snap:true,
    grid:[20,20]
   

}
);


 $( function() {
    $( ".lotus-icon" ).draggable();
    $( ".lotus-icon" ).droppable({
      drop: function( event, ui ) {
        $( this )
          .addClass( "mat" )
          .find( "mat" )
            .html( "mat" );
      }
    });
  } );

   $( function() {
    $( ".tree-icon" ).draggable();
    $( ".tree-icon" ).droppable({
      drop: function( event, ui ) {
        $( this )
          .addClass( "mat" )
          .find( "mat" )
            .html( "mat" );
      }
    });
  } );





$(".lotus-icon").click(
    function(){
        // $(".chair").addClass("reveal");
        // $(".chair").css("display", "block")
        $("#left").show();
        $("#right").show();
        // $(".reveal-btn").hide();
        
    }


)
    


$(document).ready(function () {
  $(".num").each(function () {
    var randomtop = Math.floor(
        Math.random() * ($("#right").height() - $(this).height() - 20)
      ),
      randomleft = Math.floor(
        Math.random() * ($("#right").width() - $(this).width() - 20)
      ),
      randomzindex = Math.floor(Math.random() * 30);
    $(this).css({
      top: randomtop,
      left: randomleft,
      "z-index": randomzindex,
    });
  });
});

$(".tree-icon").click(
    function(){
        // $(".chair").addClass("reveal");
        // $(".chair").css("display", "block")
        $("#left").show();
        $("#right").show();
        // $(".reveal-btn").hide();
        
    }


)

$(document).ready(function () {
  $(".num2").each(function () {
    var randomtop = Math.floor(
        Math.random() * ($("#right").height() - $(this).height() - 20)
      ),
      randomleft = Math.floor(
        Math.random() * ($("#right").width() - $(this).width() - 20)
      ),
      randomzindex = Math.floor(Math.random() * 30);
    $(this).css({
      top: randomtop,
      left: randomleft,
      "z-index": randomzindex,
    });
  });
});





