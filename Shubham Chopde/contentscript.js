(() => {
  let ytleftcontrols, ytVideo;
  let currentVideoId = "";
  let currentbookmarkArray = [];

  chrome.runtime.onMessage.addListener((obj, sender, response) => {
    const { type, videoId, timeValue } = obj;
    if (type === "NEW_VIDEO") {
      currentVideoId = videoId;
      newvideoloaded();
    } else if (type === "PLAY") {
      ytVideo.currentTime = timeValue;
    }else if (type === 'DELETE'){
      currentbookmarkArray = currentbookmarkArray.filter((b)=> b.time != timeValue)
      chrome.storage.sync.set({[currentVideoId]:JSON.stringify[currentbookmarkArray]})
      response( currentbookmarkArray)
    }
  });

  function newvideoloaded() {
    let bookMarkBtn = document.querySelector(".plusIcon");
    if (!bookMarkBtn) {
      ytleftcontrols = document.getElementsByClassName("ytp-left-controls")[0];
      ytVideo = document.getElementsByClassName("video-stream")[0];

      let plus = document.createElement("img");
      plus.src = chrome.runtime.getURL("assets/bookmark.png");
      plus.className = "ytp-button " + "plusIcon";
      plus.title = "Click to bookmark current timestamp";

      ytleftcontrols.append(plus);
      plus.addEventListener("click", addNewBookmark);
    }
  }

  async function addNewBookmark() {
    let currentTime = ytVideo.currentTime;
    const discription = {
      time: currentTime,
      disc: `Bookmark at ` + convertTimeintoSecond(currentTime),
    };
    console.log(discription);
    console.log(currentbookmarkArray);

    currentbookmarkArray = await getDatafromArray();

    chrome.storage.sync.set({
      [currentVideoId]: JSON.stringify(
        [...currentbookmarkArray, discription].sort((a, b) => a.time - b.time)
      ),
    });
  }

  function getDatafromArray() {
    return new Promise((resolve, reject) => {
      chrome.storage.sync.get([currentVideoId], (item) => {
        if ([currentVideoId]) {
          resolve(item[currentVideoId] ? JSON.parse(item[currentVideoId]) : []);
        } else {
          reject(error);
        }
      });
    });
  }

  newvideoloaded();
})();

function convertTimeintoSecond(currentTime) {
  var date = new Date(0);
  date.setSeconds(currentTime);
  return date.toISOString().substr(11, 8);
}
