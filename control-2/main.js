$( ".draggable, .draggable-lotus, .draggable-tree, .draggable-mountain" ).draggable({ snap: ".mat", grid:[20,20], containment: "container",
 });



//alows pngs to be dragable

// $(".draggable").draggable({
    
//     containment:".container",
//     scroll:false,
//     snap:true,
//     grid:[20,20]
   

// }
// );



// //allows lotus-pose icon to be draggable
// $(".lotus-pose").draggable();
// $(".draggable-lotus").draggable({
    
//     containment:".container",
//     scroll:false,
//     // snap:true,
//     grid:[20,20]
   

// }
// );

// //allows tree-pose icon to be draggable
// $(".tree-pose").draggable();
// $(".draggable-tree").draggable({
    
//     containment:".container",
//     scroll:false,
//     snap:true,
//     grid:[20,20]
   

// }
// );

// //allows tree-pose icon to be draggable
// $(".mountain-pose").draggable();
// $(".draggable-mountain").draggable({
    
//     containment:".container",
//     scroll:false,
//     snap:true,
//     grid:[20,20]
   

// }
// );


//allows a pink glow around mat when lotus is dragged and dropped on top
$(function(){
    $(".droppable").droppable({

        accept:".draggable-lotus",
        // accept:".draggable-tree",
        tolderance:"intersect",
        classes:{

        },
        drop:function(event,ui){
            $(mat).addClass("lotus-glow");
        },

        out:function(event,ui){
            $(mat).removeClass("lotus-glow");
        }
        
        
    });
});

$(function(){
    $(".droppable-accept").droppable({

        accept:".draggable-tree",
        // accept:".draggable-tree",
        tolderance:"intersect",
        classes:{

        },
        drop:function(event,ui){
            $("mat-2").addClass("lotus-glow")
        }
        
    });
});

$(function(){
    $(".droppable-accept-2").droppable({

        accept:".draggable-mountain",
        // accept:".draggable-tree",
        tolderance:"intersect",
        classes:{

        },
        drop:function(event,ui){
            $("mat-3").addClass("lotus-glow")
        }
        
        
    });
});

// $( ".droppable-target" ).droppable({
//   drop: function( event, ui ) {
//     // Add a class to the drop zone itself
//     // $(this).addClass( "ui-state-highlight" );

//     $("mat").toggleClass( "lotus-glow" ),
//         $(".lotus-pose").addClass("lotus-glow")

//   }
// });


///// //reveals lotus flowers on page when lotus-pose icon is dropped


$( ".droppable-target-2" ).droppable({
  over: function( event, ui ) {
    $( this ).toggleClass( "lotus-glow" );

    $('.lotus-reveal-div').fadeIn(); // Or use .fadeIn() for a smooth animation
  },
  out: function( event, ui ) {
    $( this ).toggleClass( "lotus-glow" );

     $('.lotus-reveal-div').hide();//hides lotus flowers when taken off mat
  },

});




// $(function(){
//     $(".droppable").droppable({

//         accept:".draggable",
//         tolderance:"intersect",
//         classes:{

//         },
//         drop:function(event,ui){
//             $("mat").addClass("lotus-glow")
//         }
        
//     });
// });

///// //reveals lotus flowers on page when lotus-pose icon is dropped


$( ".droppable-target-3" ).droppable({
  over: function( event, ui ) {
    $( this ).toggleClass( "lotus-glow" );

    $('.tree-reveal-div').fadeIn(); // Or use .fadeIn() for a smooth animation
  },
  out: function( event, ui ) {
    $( this ).toggleClass( "lotus-glow" );

     $('.tree-reveal-div').hide();//hides lotus flowers when taken off mat
  },

});

$( ".droppable-target-4" ).droppable({
  over: function( event, ui ) {
    $( this ).toggleClass( "lotus-glow" );

    $('.mountain-reveal-div').fadeIn(); // Or use .fadeIn() for a smooth animation
  },
  out: function( event, ui ) {
    $( this ).toggleClass( "lotus-glow" );

     $('.mountain-reveal-div').hide();//hides lotus flowers when taken off mat
  },

});







// //randomly places trees
$(document).ready(function () {
  $(".num2").each(function () {
    var randomtop = Math.floor(
        Math.random() * ($(".tree-reveal-div").height() - $(this).height() - 20)
      ),
      randomleft = Math.floor(
        Math.random() * ($(".tree-reveal-div").width() - $(this).width() - 20)
      ),
      randomzindex = Math.floor(Math.random() * 30);
    $(this).css({
      top: randomtop,
      left: randomleft,
      "z-index": randomzindex,
    });
  });
});


// //randomly places lotus flowers

$(document).ready(function () {
  $(".num").each(function () {
    var randomtop = Math.floor(
        Math.random() * ($(".lotus-reveal-div").height() - $(this).height() - 20)
      ),
      randomleft = Math.floor(
        Math.random() * ($(".lotus-reveal-div").width() - $(this).width() - 20)
      ),
      randomzindex = Math.floor(Math.random() * 30);
    $(this).css({
      top: randomtop,
      left: randomleft,
      "z-index": randomzindex,
    });
  });
});

$(document).ready(function () {
  $(".num3").each(function () {
    var randomtop = Math.floor(
        Math.random() * ($(".mountain-reveal-div").height() - $(this).height() - 20)
      ),
      randomleft = Math.floor(
        Math.random() * ($(".mountain-reveal-div").width() - $(this).width() - 20)
      ),
      randomzindex = Math.floor(Math.random() * 30);
    $(this).css({
      top: randomtop,
      left: randomleft,
      "z-index": randomzindex,
    });
  });
});



$(".water-btn").click(
    function(){
        $(".water").fadeToggle("reveal");
        $(".water").css("display", "block")
        // $(".water").show();
        // $(".reveal-btn").hide();
        
    }


)
