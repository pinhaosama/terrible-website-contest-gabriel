
  var audio = document.getElementById('music');
  var playButton = document.getElementById('plei');
  
  audio.addEventListener('loadeddata', function() {
    playButton.addEventListener('click', function() {
      audio.play()});});