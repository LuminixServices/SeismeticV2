
if (document.cookie.indexOf("noparticles=true") !== -1) {
      var particlesDiv = document.getElementById("particles-js");
      var countSpan = document.querySelector(".js-count-particles");
      var scriptTag = document.querySelector("script[src='./JS/min.js']");
      var link = document.querySelector("#my-link");
  
      // Remove the elements from the DOM
      particlesDiv.remove();
      countSpan.remove();
      scriptTag.remove();
      link.remove();
    }


    if (document.cookie.indexOf("aboutblank=true") !== -1) {
      var isRunningInIframe = (window.self !== window.top);
      if (isRunningInIframe) {
        console.log("Seismetic is running in about:blank or a client");
      } else {
        var viewFrame;
        try {
          viewFrame = window !== top
        } catch (f) {
          viewFrame = !0
        }
        if (!viewFrame && !navigator.userAgent.includes("Firefox")) {
          let c = open("about:blank", "_blank");
          if (!c || c.closed) alert("Allow popups and redirects to hide this from showing up in your history.\nThanks!\JMW");
          else {
            let b = c.document,
              d = b.createElement("iframe"),
              a = d.style,
              e = b.createElement("link");
            b.title = "Google Drive", e.rel = "icon", e.href = "https://ssl.gstatic.com/images/branding/product/1x/drive_2020q4_32dp.png", d.src = location.href, a.position = "fixed", a.top = a.bottom = a.left = a.right = 0, a.border = a.outline = "none", a.width = a.height = "100%", b.body.appendChild(d), location.replace("https://classroom.google.com")
          }
        }
        document.addEventListener("keypress", function(d) {
          if ("Enter" === d.key) {
            let e = document.getElementById("exploit").value,
              f = window.open("about:blank", "_blank"),
              b = f.document,
              c = b.createElement("iframe"),
              a = c.style;
            b.createElement("link"), b.title = "_blank", c.src = e, a.position = "fixed", a.border = a.outline = "none", a.top = a.bottom = a.left = a.right = 0, a.width = a.height = "100%", b.body.appendChild(c)
          }
        })
        console.log("Launched in about:blank");
      }
      }
if (document.cookie.indexOf("forcestatic=true") !== -1) {
  var functions = [window.openWindow];
  
  var containers = document.getElementsByTagName("body")[0].querySelectorAll("div.container");
  for (var i = 0; i < containers.length; i++) {
    var buttonElement = containers[i].querySelector("button[onclick*='openWindow']");
    if (buttonElement) {
      var containerParent = containers[i].parentNode;
      containerParent.removeChild(containers[i].previousSibling);
      containerParent.removeChild(containers[i].nextSibling);
      containerParent.removeChild(containers[i]);
    }
  }
}
