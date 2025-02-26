// popup.js
// Still to program
document.getElementById('hideButton').addEventListener('click', () => {
    chrome.tabs.executeScript({
        file: 'content.js'
    });
});
