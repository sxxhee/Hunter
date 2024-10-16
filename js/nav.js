$(document).ready(function() {
    $('.bers').on('click', function() {
      $('.nav').toggleClass('open'); // 메뉴 열고 닫기
      $('body').toggleClass('menu-open'); // 스크롤 제거/복원
    });

    $('.nav li').on('click', function() {
      $('.nav li').removeClass('active');
      $(this).addClass('active');
    });
  });