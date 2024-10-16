window.addEventListener('load', function() {
  function updateAosEffect() {
    var comImg = document.querySelector('.com-img2');
    
    // 730px 이하일 경우 zoom-in-out으로 변경
    if (window.innerWidth <= 730) {
      comImg.setAttribute('data-aos', 'zoom-in-out');
    } else {
      // 730px 이상일 경우 원래 값으로 복구
      comImg.setAttribute('data-aos', 'zoom-in-right');
    }

    // AOS 다시 초기화
    AOS.refresh();
  }

  // 페이지 로드 시 실행
  updateAosEffect();

  // 화면 크기 변경 시마다 실행
  window.addEventListener('resize', updateAosEffect);
});