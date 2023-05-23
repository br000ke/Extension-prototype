document.addEventListener('DOMContentLoaded', function() {
  fetchLunchInfo();
});

function fetchLunchInfo() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://oes.cafebonappetit.com/', true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var lunchInfo = extractLunchInfo(xhr.responseText);
      displayLunchInfo(lunchInfo);
    }
  };
  xhr.send();
}

function extractLunchInfo(html) {
  // Implement the logic to extract lunch information from the HTML response
  // You may need to use DOM manipulation methods or regular expressions to extract the desired data
  // Parse the HTML and retrieve the lunch information you want to display on the calendar
  // Return the extracted lunch information as a string
}

function displayLunchInfo(lunchInfo) {
  var lunchInfoElement = document.getElementById('lunch-info');
  lunchInfoElement.textContent = lunchInfo;
}
