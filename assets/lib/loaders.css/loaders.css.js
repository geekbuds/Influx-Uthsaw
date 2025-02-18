(function ($) {
  var divs = {
    'ball-pulse': 3,
    'ball-grid-pulse': 5,  // Reduced the number of divs here
    'ball-clip-rotate': 1,
    'ball-clip-rotate-pulse': 1, // Reduced to 1 for faster load
    'square-spin': 1,
    'ball-clip-rotate-multiple': 1,
    'ball-pulse-rise': 3, // Reduced
    'ball-rotate': 1,
    'cube-transition': 1,
    'ball-zig-zag': 1,
    'ball-zig-zag-deflect': 1,
    'ball-triangle-path': 2, // Reduced
    'ball-scale': 1,
    'line-scale': 3, // Reduced
    'line-scale-party': 3, // Reduced
    'ball-scale-multiple': 1,  // Reduced
    'ball-pulse-sync': 2,  // Reduced
    'ball-beat': 2,  // Reduced
    'line-scale-pulse-out': 3,  // Reduced
    'line-scale-pulse-out-rapid': 3,  // Reduced
    'ball-scale-ripple': 1,
    'ball-scale-ripple-multiple': 2,  // Reduced
    'ball-spin-fade-loader': 4,  // Reduced
    'line-spin-fade-loader': 4,  // Reduced
    'triangle-skew-spin': 1,
    'pacman': 3,  // Reduced
    'ball-grid-beat': 6,  // Reduced
    'semi-circle-spin': 1,
    'ball-scale-random': 2  // Reduced
  };

  // Optimized function to add essential divs quickly
  var addDivs = function(n) {
    var divsString = '';
    for (var i = 1; i <= n; i++) {
      divsString += '<div></div>';
    }
    return divsString;
  };

  // jQuery Plugin to apply loader
  $.fn.loaders = function() {
    return this.each(function() {
      var elem = $(this);
      $.each(divs, function(key, value) {
        if (elem.hasClass(key)) {
          elem.html(addDivs(value)); // Add loader divs quickly
        }
      });
    });
  };

  $(function() {
    // Initialize loader content for each class
    $.each(divs, function(key, value) {
      $('.loader-inner.' + key).html(addDivs(value));
    });

    // Set a very quick timeout for loader to hide after a few seconds
    setTimeout(function() {
      // Fade out the loader very quickly (100ms) after 1 second
      $('#preloader').fadeOut(100); // Shorter fade out duration for fast transition
    },2000); // 1 second loader timeout
  });

})(window.jQuery || window.Zepto);
