## Custom jQuery Plugin for the Youtube API 
### Demo
<a href="https://jsfiddle.net/msorce/o409hj6j/">demo on jsfiddle</a>
---
``` javascript 
$(function() {
  (function($) {
    'use strict';
    $.fn.ytplugin = function(options) { //plugin start
      return this.each(function() {
        var $this = $(this);
        var vidId = $this.attr('data-vid');
        var settings = $.extend({
          id: vidId
        }, options);
        // var elName = $this.attr('id');
        var elName = $this.attr('id');
        var player = null;
        var eventYouTubePlayerAPIReady = null;
        function onPlayerReady(event) {
          console.log(event.target.getPlayerState());
        }
        if (typeof(window.onYouTubePlayerAPIReady) == 'function') {
          eventYouTubePlayerAPIReady = window.onYouTubePlayerAPIReady;
        }
        window.onYouTubePlayerAPIReady = function(event) {
          player = new YT.Player(elName, {
            videoId: settings.id,
            events: {
              'onReady': onPlayerReady
            }
          });
          if (eventYouTubePlayerAPIReady) {
            eventYouTubePlayerAPIReady(event);
          }
        };
      });
    }; //plugin end
  }(jQuery));
});
```
