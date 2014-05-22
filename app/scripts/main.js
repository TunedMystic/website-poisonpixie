console.log("\nThis is a mockup website created by Sandeep Jadoonanan.");
console.log("\nNOTE: This is not a real company.");
console.log("\nThis website is part of Sandeep Jadoonanan's web design / web development portfolio.");
console.log("\nNone of the images are being used for commercial purposes.\n\nThe owner of this website does not claim to own these images.");
console.log("\nOk... I think we're good here...");

$(document).ready(function() {
  
  // Masonry js
  var masonryOptions = {
    columnWidth: 380,
    itemSelector: '.block-outer',
    gutter: 20,
    transitionDuration: "0.5s"
  };
  
  $(".main-grid").masonry(masonryOptions);
  
  // Bootstrap modal
  
  var modalOptions = {
    show: false,
    keyboard: true
  }
  
  $("#added-to-cart").modal(modalOptions);
  $("#newsletter-successful").modal(modalOptions);
  
  // When you add an item to the cart
  $(".add-to-cart").click(function() {
    $("#added-to-cart").modal("show");
  });  
  
  // When you subscribe to a newsletter
  $(".signup>form").on("submit", function(e) {
    e.preventDefault();
    e.stopPropagation();
    
    $("#newsletter-successful").modal("show");
    
    $(this).find("input").val("");
  });
  
  // Make the modals close with the [Enter] key
  $(".modal").keypress(function(e) {
    if ((e.keyCode == 13) && (e.target.type != "textarea")) {
      e.preventDefault();
      $(this).modal("hide");
    }
  });
  
  // Prevent the <a> links from opooing the page up
  $("a").click(function(e) {
    
    // Stop the link if it does not have the class 'sandeep'
    if( !$(this).hasClass("sandeep") ) {
      e.preventDefault();
      e.stopPropagation();
    }
    
  });
  
  
});