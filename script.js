//your JS code here. If required.
window.onload = function() {
  // Get the div element
  var div = document.getElementById('browser-info');

  // Get the browser name and version
  var browserName = navigator.appName;
  var version = navigator.appVersion;

  // Create the message
  var message = "You are using " + browserName + " version " + version;

  // Add the message to the div
  div.innerHTML = message;
}