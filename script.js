var myVar;
    
    function myFunction() {
      myVar = setTimeout(showPage, 3000);
    }

    function showPage() {
      document.getElementById("loader").style.display = "none";
      document.getElementById("myDiv").style.display = "block";
      document.getElementById("loader").style.display = "none";
      document.getElementById("myDiv2").style.display = "block";
    }

(function() {
  $('.btn').click(function() {
    $(this).toggleClass('active');
    return $('.box').toggleClass('open');
  });

}).call(this);

$(function () {

  $('.mode span.light').on('click', function () {

    $(this).css('left', '150%');

    $('.mode span.dark').css('left', '65%');

    $('.mode').css('background-color', '#222831');

    $('body').css('background-color', '#eee');

  });

  

  $('.mode span.dark').on('click', function () {

    $(this).css('left', '-100%');

    $('.mode span.light').css('left', '10%');

    $('.mode').css('background-color', '#eee');

    $('body').css('background-color', '#222831');

  });

  
})

function openInNewTab(url) {
  window.open(url, '_blank').focus();
 }

 