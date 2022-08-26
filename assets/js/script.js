function makeTweetsDark() {
  document.querySelectorAll('[data-tweet-id]').forEach(function (tweet) {
    var src = tweet.getAttribute("src");
    if (src.indexOf("theme=light") > 0) {
      tweet.setAttribute("src", src.replace("theme=light", "theme=dark"));
    }
  })
}

(function () {
  console.log(document.body)
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add('dark-mode');
  }

  if (document.body.classList.contains('dark-mode')) {
    var tick = 0;
    var interval = setInterval(function() {
      makeTweetsDark();
      tick += 1;
      if (tick > 3) {
        clearInterval(interval);
      }
    }, 2000);
  }
})();