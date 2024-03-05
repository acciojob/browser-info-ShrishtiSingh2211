//your JS code here. If required.
window.onload = function() {
  // Get the div element
  var div = document.getElementById('browser-info');

  // Get the user agent string
  var userAgent = navigator.userAgent;

  // Initialize browserName with an empty string
  var browserName = "";

  // Check if user agent string contains the name of one of the browsers
  if (userAgent.indexOf("Chrome") > -1) {
    browserName = "Chrome";
  } else if (userAgent.indexOf("Safari") > -1) {
    browserName = "Safari";
  } else if (userAgent.indexOf("Opera") > -1) {
    browserName = "Opera";
  } else if (userAgent.indexOf("Firefox") > -1) {
    browserName = "Firefox";
  } else if (userAgent.indexOf("MSIE") > -1) {
    browserName = "Internet Explorer";
  }

  // Create the message
  var message = "You are using " + browserName;

  // Add the message to the div
  div.innerHTML = message;
}