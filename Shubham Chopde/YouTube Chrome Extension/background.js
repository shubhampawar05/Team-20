chrome.tabs.onUpdated.addListener((tabId, tab) => {
  if (tab.url && tab.url.includes("youtube.com/watch")){
    let Id = tab.url.split("?v=")[1];

    chrome.tabs.sendMessage(tabId, {
      type: "NEW_VIDEO",
      videoId: Id,
    });
  }
});
