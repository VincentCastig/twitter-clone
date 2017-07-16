$(document).ready(function(){
  var $textarea = ('.tweet-compose');
  var $existingcontent = (".content");
  var $existingaction = document.getElementsByClassName("tweet-actions");
  var $existingstats = document.getElementsByClassName("stats");
  var $existingreply = document.getElementsByClassName("reply");
  var $tweet_val = $($textarea)[0];
  




  $('#tweet-controls').css('display', 'none');
  $('.tweet-actions').css('display', 'none');
  $('.stats').css('display', 'none');
  $('.tweet-actions').css('display', 'none');


  $($textarea).on('click', function(){
    $('#tweet-controls').show();
    $(this).height('5em');
  });

  $($textarea).keydown(function(){
    if($(this).val().length < 140){
    $('#char-count').css("color","#999")
    $('#char-count').text(139-$(this).val().length);
    $('button').removeClass('button:disabled').addClass('button');
  }

    if($(this).val().length >= 130){
      $('#char-count').css("color","red")
    }
    if($(this).val().length >= 140){
        $('button').addClass('button:disabled').removeClass('button');
      }
    });

    $('#tweet-submit').on('click', function(){
      $('.tweet')[0].prepend($('.content').clone()[0],
      ($($tweet_val).val()),
      ($('.stats').clone()[0]),
      ($($existingaction).clone())[0]),
      ($('.reply').clone()[0]);
      });

      $('.content').hover(function(){
        $(this).find('.tweet-actions').toggle("show");
      });

      $('.content').click(function(){
        $(this).find('.stats').toggle("show");
      });

    });
