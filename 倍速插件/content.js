chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === "setSpeed") {
    var speed = request.speed;
    var video = document.querySelector('video');
    if (video) {
      video.playbackRate = speed;
    }
  }
});