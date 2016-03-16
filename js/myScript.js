$(function() {
  var all = $('body > div > div.ui.inverted.vertical.masthead.center.aligned.segment').height();
  var curr = $('body').scrollTop();
  var percent = curr / all;
  $(window).on('scroll', function() {
    all = $('body > div > div.ui.inverted.vertical.masthead.center.aligned.segment').height();
    curr = $('body').scrollTop();
    percent = curr / all;
    var t = ((-30 + 30 * percent) <= 0) ? (-30 + 30 * percent) : 0;
    //$('.activity, .card').css('opacity', percent);
    //$('.activity .item-img ').css('transform', 'translate(0,' + t + 'em)');
  });
  $('.activity, .card').css('opacity', 1);

  $('#start').click(function() {
    $('body').animate({
      scrollTop: $('.item-container').offset().top
    }, 600);
  });

  $('.item-detail')
    .visibility({
      once: false,
      continuous: true,
      onTopVisible: function(calculations) {
        $(this).addClass('vis');
      }
    });
  $('.item-img')
    .visibility({
      once: false,
      continuous: true,
      onTopVisible: function(calculations) {
        $(this).addClass('vis');
      }
    });

});