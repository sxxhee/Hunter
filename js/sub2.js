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

  //acc-men hover
  $('.acc-item-men img').each(function() { 
    const originalSrc = $(this).attr('src');
    const hoverSrc = originalSrc.replace('.jpg', '-1.jpg');

    $(this).on('mouseover', function() { 
        $(this).attr('src', hoverSrc); 
    });

    $(this).on('mouseout', function() { 
        $(this).attr('src', originalSrc);
    });
  });

  //menu btn
  $("#women").click(function(){
    $(".acc-item li").css("display", "list-item");
    $(".acc-item-men li").css("display", "none");
  })

  $("#men").click(function(){
    $(".acc-item li").css("display", "none");
    $(".acc-item-men li").css("display", "list-item");
  })
});

