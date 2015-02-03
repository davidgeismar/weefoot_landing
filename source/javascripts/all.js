//= require jquery
//= require bootstrap-sprockets
//= require_tree .

$(document).ready(function(){
  $(".img-popover").popover({
    html: true,
    trigger: "hover",
    placement: "bottom"
  });
      })