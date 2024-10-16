// $(document).ready(function() {
//   let currentIndex = 0; // 현재 슬라이드 인덱스
//   const totalSlides = $('.slide ul li').length; // 슬라이드 총 개수
//   const slideDuration = 4000; // 슬라이더가 변경되는 시간 (4초)
//   const progressDuration = slideDuration; // 진행바 애니메이션 시간은 슬라이드 변경 시간과 같음
//   let autoSlideInterval; // setInterval을 저장할 변수
//   let restartTimer; // 슬라이드 재시작 타이머

//   // 슬라이드 첫 번째만 보이도록 설정
//   $('.slide ul li').hide().eq(currentIndex).show();

//   // progress bar 애니메이션을 시작하는 함수
//   function startProgressBar() {
//     $('.progress1').css({ width: '0%' }); // 진행바를 0%로 초기화
//     $('.progress1').stop(true).animate({ width: '280px' }, progressDuration); // 200px로 애니메이션
//   }

//   // 슬라이드 이동 함수
//   function changeSlide(index) {
//     $('.slide ul li').stop(true, true).hide().eq(index).show(); // fadeOut 대신 hide로 전환
//     $('.slider-indicator span:first').text(('0' + (index + 1)).slice(-2)); // 슬라이드 번호 업데이트
//     startProgressBar(); // 진행바 다시 시작
//   }

//   // 다음 슬라이드로 이동
//   function nextSlide() {
//     currentIndex = (currentIndex + 1) % totalSlides; // 인덱스 증가
//     changeSlide(currentIndex);
//   }

//   // 이전 슬라이드로 이동
//   function prevSlide() {
//     currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; // 인덱스 감소
//     changeSlide(currentIndex);
//   }

//   // 슬라이드 자동 전환 시작
//   function startAutoSlide() {
//     autoSlideInterval = setInterval(nextSlide, slideDuration); // 주기적으로 다음 슬라이드로 전환
//   }

//   // 슬라이드 자동 전환 중단
//   function stopAutoSlide() {
//     clearInterval(autoSlideInterval); // 자동 슬라이드 중단
//   }

//   // 슬라이드 자동 전환 재시작
//   function restartAutoSlide() {
//     clearTimeout(restartTimer); // 기존 타이머 제거
//     clearInterval(autoSlideInterval);
//   }

//   // 왼쪽 버튼 클릭
//   $('.sub-btn-right').on('click', function(e) {
//     e.preventDefault();
//     stopAutoSlide(); // 슬라이드 자동 전환 중단
//     prevSlide(); // 슬라이드를 이전으로 변경
//     startAutoSlide(); 
//   });

//   // 오른쪽 버튼 클릭
//   $('.sub-btn-left').on('click', function(e) {
//     e.preventDefault();
//     stopAutoSlide(); // 슬라이드 자동 전환 중단
//     nextSlide(); // 슬라이드를 다음으로 변경
//     startAutoSlide(); 
//   });

//   startProgressBar(); // 초기 진행바 시작
//   startAutoSlide(); // 초기 자동 슬라이드 시작
// });
