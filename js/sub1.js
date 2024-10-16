//메인슬라이더
document.addEventListener("DOMContentLoaded", function() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 4000, // 4초마다 자동으로 슬라이드 전환
      disableOnInteraction: false, // 사용자가 슬라이드를 조작해도 autoplay 유지
    },
  });

  // 반응형 설정
  function updateSwiper() {
    if (window.matchMedia("(max-width: 740px)").matches) {
      swiper.params.slidesPerView = 1; // 740px 이하에서는 1개 표시
      swiper.params.spaceBetween = 0; // 간격 조정
    } else {
      swiper.params.slidesPerView = 3; // 기본 설정 3개 표시
      swiper.params.spaceBetween = 20; // 기본 간격
    }
    swiper.update(); // Swiper 업데이트
  }

  // 초기 업데이트
  updateSwiper();
  
  // 창 크기 변경 시 업데이트
  window.addEventListener("resize", updateSwiper);
});




$(document).ready(function() {
//서브슬라이더
  let currentIndex = 0; // 현재 슬라이드 인덱스
  const totalSlides = $('.silder-imgbox ul li').length; // 슬라이드 총 개수
  const slideDuration = 4000; // 슬라이더가 변경되는 시간 (4초)
  const progressDuration = slideDuration; // 진행바 애니메이션 시간은 슬라이드 변경 시간과 같음

  // 슬라이드 첫 번째만 보이도록 설정
  $('.silder-imgbox ul li').hide().eq(currentIndex).show();

  // progress bar 애니메이션을 시작하는 함수
  function startProgressBar() {
    $('.progress1').css({ width: '0%' }); // 진행바를 0%로 초기화
    $('.progress1').stop(true).animate({ width: '200px' }, progressDuration); // 200px로 애니메이션
  }

  // 슬라이드 이동 함수
  function changeSlide(index) {
    // 현재 슬라이드를 fadeOut 후, 인덱스에 맞는 슬라이드를 fadeIn
    $('.silder-imgbox ul li').stop(true, true).fadeOut(400).eq(index).fadeIn(400); 
    $('.slider-indicator span:first').text(('0' + (index + 1)).slice(-2)); // 슬라이드 번호 업데이트
    startProgressBar(); // 진행바 다시 시작
  }

  // 자동 슬라이드 변경
  let slideInterval = setInterval(function() {
    currentIndex = (currentIndex + 1) % totalSlides; // 다음 슬라이드로 인덱스 갱신
    changeSlide(currentIndex);
  }, slideDuration);

  // 오른쪽 버튼 클릭 이벤트
  $('.sub-btn-left').click(function() {
    clearInterval(slideInterval); // 자동 슬라이드 멈춤
    currentIndex = (currentIndex + 1) % totalSlides; // 인덱스 증가
    changeSlide(currentIndex);
    // 클릭 후 다시 자동 슬라이드 시작
    slideInterval = setInterval(function() {
      currentIndex = (currentIndex + 1) % totalSlides;
      changeSlide(currentIndex);
    }, slideDuration);
  });

  // 왼쪽 버튼 클릭 이벤트
  $('.sub-btn-right').click(function() {
    clearInterval(slideInterval); // 자동 슬라이드 멈춤
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; // 인덱스 감소
    changeSlide(currentIndex);
    // 클릭 후 다시 자동 슬라이드 시작
    slideInterval = setInterval(function() {
      currentIndex = (currentIndex + 1) % totalSlides;
      changeSlide(currentIndex);
    }, slideDuration);
  });

  // 처음 시작할 때 progress bar 설정
  startProgressBar();



  //BEST hover
  $('.best-item img').each(function() { // 클래스 'best-item' 내의 모든 <img> 태그에 대해 반복
    const originalSrc = $(this).attr('src'); // 현재 이미지의 원래 소스 경로를 가져와서 변수에 저장
    const hoverSrc = originalSrc.replace('.png', '-1.png'); // 원래 소스에서 .png를 -1.png로 변경하여 호버 이미지 경로 생성

    $(this).on('mouseover', function() { // 마우스를 이미지 위에 올렸을 때 실행할 이벤트 리스너 추가
        $(this).attr('src', hoverSrc); // 현재 이미지 소스를 호버 이미지로 변경
    });

    $(this).on('mouseout', function() { // 마우스를 이미지에서 떼었을 때 실행할 이벤트 리스너 추가
        $(this).attr('src', originalSrc); // 현재 이미지 소스를 원래 이미지로 되돌림
    });

    $('.best-item-men img').each(function() { // 클래스 'best-item' 내의 모든 <img> 태그에 대해 반복
      const originalSrc = $(this).attr('src'); // 현재 이미지의 원래 소스 경로를 가져와서 변수에 저장
      const hoverSrc = originalSrc.replace('.jpg', '-1.jpg'); // 원래 소스에서 .png를 -1.png로 변경하여 호버 이미지 경로 생성
  
      $(this).on('mouseover', function() { // 마우스를 이미지 위에 올렸을 때 실행할 이벤트 리스너 추가
          $(this).attr('src', hoverSrc); // 현재 이미지 소스를 호버 이미지로 변경
      });
  
      $(this).on('mouseout', function() { // 마우스를 이미지에서 떼었을 때 실행할 이벤트 리스너 추가
          $(this).attr('src', originalSrc); // 현재 이미지 소스를 원래 이미지로 되돌림
      });
    });
  });

  //new hover
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


  //best btn
  $("#women").click(function(){
    $(".best-item li").css("display", "list-item");
    $(".best-item-men li").css("display", "none");
  })

  $("#men").click(function(){
    $(".best-item li").css("display", "none");
    $(".best-item-men li").css("display", "list-item");
  })
});
