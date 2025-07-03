
$(document).ready(function () {
  // ✅ Hover effect for skill cards (only outer layer glow, not full background)
  $('.skill-box').hover(
    function () {
      $(this).css({
        boxShadow: '0 0 15px #90D5FF', // light blue glow on hover
        transform: 'scale(1.05)',
        transition: '0.3s'
      });
    },
    function () {
      $(this).css({
        boxShadow: '0 0 10px rgba(255,255,255,0.1)', // original shadow
        transform: 'scale(1)'
      });
    }
  );

  $('.edu-item').hover(
    function () {
      $(this).css({
        boxShadow: '0 0 15px #90D5FF',
        transform: 'scale(1.03)',
        transition: '0.3s'
      });
    },
    function () {
      $(this).css({
        boxShadow: 'none',
        transform: 'scale(1)'
      });
    }
  );
$(document).ready(function () {
  $('.edu-item').hover(
    function () {
      $(this).css({
        boxShadow: '0 0 20px #90D5FF',
        transform: 'scale(1.02)',
        transition: '0.3s'
      });
    },
    function () {
      $(this).css({
        boxShadow: '0 0 10px rgba(255,255,255,0.1)',
        transform: 'scale(1)'
      });
    }
  );
});




  $(document).ready(function () {
    // Hover effect for contact method blocks
    $('.contact-method').hover(
      function () {
        $(this).css({
          boxShadow: '0 0 15px #90D5FF',
          transform: 'scale(1.02)',
          transition: '0.3s'
        });
      },
      function () {
        $(this).css({
          boxShadow: 'none',
          transform: 'scale(1)'
        });
      }
    );

    // Button hover effect
    $('input[type="submit"], input[type="reset"]').hover(
      function () {
        $(this).css({
          backgroundColor: '#90D5FF',
          color: '#fff',
          cursor: 'pointer'
        });
      },
      function () {
        $(this).css({
          backgroundColor: '',
          color: ''
        });
      }
    );
  });








  $(document).ready(function () {
    // Hover effect for entire about section
    $('.about-section').hover(
      function () {
        $(this).css({
          boxShadow: '0 0 20px #90D5FF',
          transform: 'scale(1.01)',
          transition: '0.3s'
        });
      },
      function () {
        $(this).css({
          boxShadow: '',
          transform: 'scale(1)'
        });
      }
    );

    // Glow effect on image hover
    $('.about-photo img').hover(
      function () {
        $(this).css({
          transform: 'scale(1.05)',
          boxShadow: '0 0 25px #90D5FF'
        });
      },
      function () {
        $(this).css({
          transform: 'scale(1)',
          boxShadow: '0 0 15px #90D5FF'
        });
      }
    );
  });





















  // ✅ "Thanks for visiting" message when scroll reaches bottom
  $(window).scroll(function () {
    if ($(window).scrollTop() + $(window).height() >= $(document).height() - 10) {
      if (!$('#thanksMessage').length) {
        $('body').append('<div id="thanksMessage" style="position:fixed;bottom:10px;right:10px;padding:12px 20px;background:#28a745;color:#fff;border-radius:8px;z-index:9999;">Thanks for visiting!</div>');
        setTimeout(function () {
          $('#thanksMessage').fadeOut(2000, function () {
            $(this).remove();
          });
        }, 3000);
      }
    }
  });




});
