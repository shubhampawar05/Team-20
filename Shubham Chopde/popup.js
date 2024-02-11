import { getActiveTabURL } from "./utils.js";

function addBookMark(bookmarkelement, bookmark) {
  console.log(bookmarkelement, bookmark);
  console.log("inside addBookmark fucntion");
  let newBookmarkElement = document.createElement("div");
  let title = document.createElement("div");
  let controls = document.createElement("div");

  title.textContent = bookmark.disc;
  console.log(bookmark.disc);
  title.className = "bookmark-title";
  controls.className = "bookmark-controls";

  newBookmarkElement.id = "bookmark-" + bookmark.time;
  newBookmarkElement.className = "bookmark";
  newBookmarkElement.setAttribute("timestamp", bookmark.time);

  setBookmarkAttributes("play", onPlay, controls);
  setBookmarkAttributes("play", onDelete, controls);


  newBookmarkElement.appendChild(title);
  newBookmarkElement.appendChild(controls);
  bookmarkelement.appendChild(newBookmarkElement);
  // setBookmarkAttributes()
}
function setBookmarkAttributes(src, eventListener, controlParentElement) {
  let controlElement = document.createElement("img");
  controlElement.src = "assest" + src + ".png";
  controlElement.title = src;
  controlElement.addEventListener("click", eventListener);
  controlParentElement.appendChild(controlElement);
}

 async function onPlay(e){
  const bookmarkTime = e.target.parentNode.parentNode.getAttribute("timestamp");
  const activeTab = await getActiveTabURL();

  chrome.tabs.sendMessage(activeTab.id, {
    type: "PLAY",
    value: bookmarkTime,
  })
}

const onDelete = async e => {
  const activeTab = await getActiveTabURL();
  const bookmarkTime = e.target.parentNode.parentNode.getAttribute("timestamp");
  const bookmarkElementToDelete = document.getElementById(
    "bookmark-" + bookmarkTime
  );

  bookmarkElementToDelete.parentNode.removeChild(bookmarkElementToDelete);

  chrome.tabs.sendMessage(activeTab.id, {
    type: "DELETE",
    value: bookmarkTime,
  }, viewBookmarks);
};

function showBookmark(curentVideoBookmars = []) {
  let bookmarkelement = document.querySelector(".bookmarks");
  bookmarkelement.innerHTML = "";
  if (curentVideoBookmars.length > 0) {
    curentVideoBookmars.forEach((bookmark) => {
      console.log(bookmark);
      addBookMark(bookmarkelement, bookmark);
    });
  } else {
    bookmarkelement.innerHTML = `<p> No bookmark to show </p>`;
  }
}

async function ChekingcurrentTab() {
  let tabInfo = await getActiveTabURL();
  let currentVideoId = tabInfo.url.split("=")[1];

  if (tabInfo.url.includes("youtube.com/watch") && currentVideoId) {
    chrome.storage.sync.get([currentVideoId], (item) => {
      const curentVideoBookmars = item[currentVideoId]
        ? JSON.parse(item[currentVideoId])
        : [];
      console.log(curentVideoBookmars);
      showBookmark(curentVideoBookmars);
    });
  } else {
    const container = document.querySelector(".container");
    console.log(container);
    console.log("abc");
    container.innerHTML =
      '<div class="title">This is not a youtube video page.</div>';
  }
}

document.addEventListener("DOMContentLoaded", ChekingcurrentTab);
