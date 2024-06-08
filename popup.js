document.getElementById('applyButton').addEventListener('click', function() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.scripting.executeScript({
      target: {tabId: tabs[0].id},
      function: function() {
        const applyButton = document.getElementById('indeedApplyButton');
        if (applyButton) {
          applyButton.click();
        }
      }
    });
  });
});