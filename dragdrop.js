$(document).ready(function() {
    // Make the draggable element draggable
    $("#draggable").draggable();
  
    // Make the droppable element droppable
    $("#droppable").droppable({
      drop: function(event, ui) {
        $(this).addClass("ui-state-highlight").find("p").html("Dropped!");
      }
    });
  });