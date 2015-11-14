<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <title>ytplayer</title>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
  <script src="http://www.youtube.com/player_api"></script>
  <script src="js/ytplugin.js"></script>
</head>

<body>
  <div id="player0" class="videoPlayer" data-vid="4hKQz-WeHpQ"></div>
  <div id="player2" class="videoPlayer" data-vid="NQKC24th90U"></div><br>
  <div id="player3" class="videoPlayer" data-vid="4hKQz-WeHpQ"></div>
  <div id="player4" class="videoPlayer" data-vid="NQKC24th90U"></div><br>
  <div id="player5" class="videoPlayer" data-vid="4hKQz-WeHpQ"></div>
  <div id="player6" class="videoPlayer" data-vid="NQKC24th90U"></div><br>
</body>
<script type="text/javascript">
$(function() {
  $('.videoPlayer').ytplugin();
});
</script>
</html>
