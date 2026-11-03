/* Posts this page's height to the parent window so a host page
   can size the iframe automatically (see README for the listener). */
(function () {
  if (window.parent === window) return; // not embedded

  function sendHeight() {
    var h = document.documentElement.scrollHeight;
    window.parent.postMessage({ type: "cotr-timeline-height", height: h }, "*");
  }

  window.addEventListener("load", sendHeight);
  window.addEventListener("resize", sendHeight);
  if ("ResizeObserver" in window) {
    new ResizeObserver(sendHeight).observe(document.body);
  }
})();
