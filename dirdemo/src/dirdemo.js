/*
 * 
 * 
 *
 * Copyright (c) 2015 
 * Licensed under the MIT license.
 */
(function ($) {
  $.fn.dirdemo = function () {
    return this.each(function (i) {
      // Do something to each selected element.
      $(this).html('dirdemo' + i);
    });
  };
}(jQuery));
