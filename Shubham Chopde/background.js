
// isko web page ke content ka access nahi hota 
//info or any changes on tab 


//   chrome.tabs.onUpdated   This is an event provided by the Chrome Extensions API. It fires when a tab is updated, including when a page is loaded or reloaded, and when its URL or title changes.

//   addListener(callback): 
// This method is used to register a listener function (callback) that will be invoked when the onUpdated event occurs. The listener function will receive 
// two parameters: tabId: The ID of the tab that was updated.
// changeInfo: An object containing information about what changed in the tab. This can include properties like status (loading, complete), url, title, and others.
chrome.tabs.onUpdated.addListener((tabId, changeInfo) => {
    if (changeInfo.url && changeInfo.url.includes("youtube.com/watch")) {
      const queryParameters = changeInfo.url.split("?")[1];
      const urlParameters = new URLSearchParams(queryParameters);
  
      chrome.tabs.sendMessage(tabId, {
        type: "NEW",
        videoId: urlParameters.get("v"),
      });
    }
  });

/*chrome.tabs.sendMessage(): Sends a message to the content script running in a specified tab.
chrome.tabs.sendMessage(): Sends a single message to a content script specified by the extension.
chrome.runtime.onMessage.addListener(): Listens for messages sent from content scripts.
chrome.tabs.update(): Updates the properties of a specific tab, such as its URL or title.
chrome.tabs.reload(): Reloads a tab.
chrome.tabs.move(): Moves one or more tabs to a new position in the window. */