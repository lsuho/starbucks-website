var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          videoId: 'An6LvWQuj_8', //최초
          playerVars: {
            autoplay: true,
            loop: true,
            playlist: 'An6LvWQuj_8'
          },
          events: {
            onReady: function (event) {
                event.target.mute()
                
            }
          }
        });
      }