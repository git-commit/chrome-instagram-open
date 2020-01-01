chrome.runtime.onInstalled.addListener(function() {
    chrome.contextMenus.create({
      "id": "openInstagramProfile",
      "title": "Open as Instagram profile",
      "contexts": ["selection"]
    });
});

chrome.contextMenus.onClicked.addListener(function(info) {
    chrome.tabs.create({"url": "https://instagram.com/" + info.selectionText})
});