 $(function() {
    $('.scroll-down').click (function() {
      $('html, body').animate({scrollTop: $('.section:nth-child(5)').offset().top }, 'slow');
      return false;
    });
  });