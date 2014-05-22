console.log('\'Allo \'Allo!');

$(document).ready(function() {
  
  var options = {
    columnWidth: 380,
    itemSelector: '.block-outer',
    //gutter: 10,
    gutter: 20,
    //isAnimated: false,
    transitionDuration: "0.5s"
  };
  
  $(".main-grid").masonry(options);
  
});