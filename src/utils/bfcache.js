// utils/bfcache.js
export const handlePageShow = (callback) => {
  window.addEventListener("pageshow", function (event) {
    if (event.persisted) {
      callback();
    }
  });
};

export const handlePageHide = (cleanupCallback) => {
  window.addEventListener("pagehide", function (event) {
    if (!event.persisted) {
      cleanupCallback();
    }
  });
};

export const initBFCacheHandling = (callback, cleanupCallback) => {
  handlePageShow(callback);
  handlePageHide(cleanupCallback);
};

export const scrollToBottom = () => {
  window.scrollTo({
    top: document.documentElement.scrollHeight, // Scrolls to the bottom of the page
    behavior: 'smooth', // Smooth scroll
  });
};

export const scrollToPosition = (position) => {
  window.scrollTo({
    top: position, // Scrolls to a specific vertical position
    behavior: 'smooth', // Smooth scroll
  });
};