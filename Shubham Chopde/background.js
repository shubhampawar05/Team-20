
// console.log('This is background.js File start');
chrome.tabs.onUpdated.addListener((tabId, tab) => {
  // it check for youtub page is it or not 
   // storing tabId or tab url from tab object 
  if (tab.url && tab.url.includes("youtube.com/watch")) {
    let Id = tab.url.split('=')[1];
    // sending message to  contentscriopt.js file or send data or information of tab like url and video  .onMessage will listien for this sending message
    chrome.tabs.sendMessage(tabId, {
      type: "NEW_VIDEO",
      videoId: Id
    });
  }
});
// console.log('This is background.js File end');