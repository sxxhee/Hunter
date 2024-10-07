$(document).ready(function() { // DOM이 완전히 로드된 후 아래의 코드를 실행
  $('.best-item img').each(function() { // 클래스 'best-item' 내의 모든 <img> 태그에 대해 반복
      const originalSrc = $(this).attr('src'); // 현재 이미지의 원래 소스 경로를 가져와서 변수에 저장
      const hoverSrc = originalSrc.replace('.png', '-1.png'); // 원래 소스에서 .png를 -1.png로 변경하여 호버 이미지 경로 생성

      $(this).on('mouseover', function() { // 마우스를 이미지 위에 올렸을 때 실행할 이벤트 리스너 추가
          $(this).attr('src', hoverSrc); // 현재 이미지 소스를 호버 이미지로 변경
      });

      $(this).on('mouseout', function() { // 마우스를 이미지에서 떼었을 때 실행할 이벤트 리스너 추가
          $(this).attr('src', originalSrc); // 현재 이미지 소스를 원래 이미지로 되돌림
      });
  });
});
