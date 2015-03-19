//= require components/webcomponentsjs/webcomponents.min

document.addEventListener("DOMContentLoaded", function(event) { 

  var $button = document.querySelector('.button');
  var $pages = document.querySelector('core-pages');

  $button.addEventListener('click', function(){
    var nextSelected = parseInt($pages.selected) + 1;
    var totalPages = $pages.items.length;

    if (nextSelected < totalPages) {
      $pages.selected = nextSelected;
    } else {
      $pages.selected = 0;
    }
  });

});