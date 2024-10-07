//acc hover
$(document).ready(function() { 
  $('.acc-item img').each(function() { 
      const originalSrc = $(this).attr('src');
      const hoverSrc = originalSrc.replace('.png', '-1.png');

      $(this).on('mouseover', function() { 
          $(this).attr('src', hoverSrc); 
      });

      $(this).on('mouseout', function() { 
          $(this).attr('src', originalSrc);
      });
  });
});