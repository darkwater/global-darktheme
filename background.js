chrome.tabs.onSelectionChanged.addListener(function(tabId) {
    chrome.pageAction.show(tabId);
});

chrome.tabs.onUpdated.addListener(function(tabId) {
    chrome.pageAction.show(tabId);
});

chrome.pageAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript(null, { code: "__dark_theme_toggle__()" });
});
