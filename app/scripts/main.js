console.log('\'Allo \'Allo!');

$(document).ready(function() {
  
  var options = {
    columnWidth: 380,
    itemSelector: '.block-outer',
    gutter: 10,
    transitionDuration: '0.9s'
  };
  
  $(".main-grid").masonry(options);
  
});