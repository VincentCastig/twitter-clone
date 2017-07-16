$(document).ready(function(){
  var $textarea = ('.tweet-compose');
  var $existingcontent = document.getElementsByClassName("content")
  var $existingaction = document.getElementsByClassName("tweet-actions")
  var $existingstats = document.getElementsByClassName("stats")
  var $existingreply = document.getElementsByClassName("reply")
  var $tweet_val = $($textarea)[0];



  $('#tweet-controls').css('display', 'none');

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
      $($existingreply[0]).clone().prependTo('#stream');
      $($existingaction[0]).clone().prependTo('#stream');
      $($existingstats[0]).clone().prependTo('#stream');
      $($tweet_val).clone().prependTo('#stream');
      $($existingcontent[0]).clone().prependTo('#stream');

      });

    });
