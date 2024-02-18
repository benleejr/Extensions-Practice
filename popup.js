document.getElementById('applyButton').addEventListener('click', function() {
    chrome.tabs.executeScript({
      file: 'clickApply.js'
    });
  });