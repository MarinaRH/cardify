
(($) =>  {
  $.fn.cardify = function () {
    $(this).find('img').each(function() {
      $(this).wrap('<figure></figure>');
    $(this).hover(() => {
      $(this).parent().append($('<figcaption>' + $(this).attr('alt') + '</figcaption>'));      
        },()=>{
          $('figcaption').remove();
        });
      });
  };
})(jQuery);