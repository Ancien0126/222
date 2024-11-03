document.addEventListener('DOMContentLoaded', function() {
  var speedInput = document.getElementById('speedInput');
  var setSpeedButton = document.getElementById('setSpeedButton');

  setSpeedButton.addEventListener('click', function() {
    var speed = speedInput.value;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {action: "setSpeed", speed: speed});
    });
  });
});