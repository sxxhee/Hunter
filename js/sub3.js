//acc hover
$(document).ready(function() { 
  $('.new-item img').each(function() { 
      const originalSrc = $(this).attr('src');
      const hoverSrc = originalSrc.replace('.png', '-1.png');

      $(this).on('mouseover', function() { 
          $(this).attr('src', hoverSrc); 
      });

      $(this).on('mouseout', function() { 
          $(this).attr('src', originalSrc);
      });
  });

$('.rec-item img').each(function() { 
  const originalSrc = $(this).attr('src');
  const hoverSrc = originalSrc.replace('.png', '-1.png');

  $(this).on('mouseover', function() { 
      $(this).attr('src', hoverSrc); 
  });

  $(this).on('mouseout', function() { 
      $(this).attr('src', originalSrc);
  });
});


//click main img
$(".main-left li").on("click",function(){
  let imgSrc = $(this).find("img").attr("src");
    $(".main-center img").attr("src",imgSrc);
  });


//사이즈 클릭시 호버 유지
$('.size-left li a').click(function(e) {
  e.preventDefault(); // 링크 기본 동작 방지
  $('.size-left li').removeClass('active'); // 기존 active 클래스 제거
  $(this).parent('li').addClass('active'); // 클릭한 요소에 active 클래스 추가
});

$('.color-img li img').click(function(e) {
  e.preventDefault(); // 링크 기본 동작 방지
  $('.color-img li').removeClass('active'); // 기존 active 클래스 제거
  $(this).closest('li').addClass('active'); // 클릭한 요소의 가장 가까운 li에 active 클래스 추가
});

});

var swiper; // 전역 변수로 swiper 선언

function initializeSwiper() {
  // 현재 화면 너비가 720px 이하일 때만 Swiper를 초기화합니다.
  if (window.innerWidth <= 720) {
    if (!swiper) { // swiper가 초기화되지 않은 경우
      swiper = new Swiper(".mySwiper", {
        pagination: {
          el: ".swiper-pagination",
          type: "fraction",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    }
  } else {
    if (swiper) { // 화면 너비가 720px 초과일 경우
      swiper.destroy(); // Swiper를 파괴하여 비활성화
      swiper = null; // swiper 변수를 초기화
    }
  }
}

// 페이지가 로드될 때 Swiper를 초기화합니다.
window.onload = initializeSwiper;

// 창 크기가 변경될 때마다 Swiper를 초기화합니다.
window.onresize = initializeSwiper;



