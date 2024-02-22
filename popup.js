// Query the active tab, which will be only one tab and inject the script in it.
function injectTheScript() {
    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
        chrome.scripting.executeScript({ target: { tabId: tabs[0].id }, files: ['clickApplyScript.js'] })
    })
}

document.getElementById('indeedApplyButton').addEventListener('click', injectTheScript)