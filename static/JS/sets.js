
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
        let inFrame
try{inFrame=window!==top}catch(e){inFrame=true}
if(!inFrame&&!navigator.userAgent.includes("Firefox")){const popup=open("about:blank","_blank")
if(!popup||popup.closed){alert("Allow popups and redirects to hide this from showing up in your history.")}else{const doc=popup.document
const iframe=doc.createElement("iframe")
const style=iframe.style
const link=doc.createElement("link")
const name=localStorage.getItem("name")||"My Drive - Google Drive";const icon=localStorage.getItem("icon")||"https://ssl.gstatic.com/images/branding/product/1x/drive_2020q4_32dp.png";doc.title=name;link.rel="icon";link.href=icon;iframe.src=location.href
style.position="fixed"
style.top=style.bottom=style.left=style.right=0
style.border=style.outline="none"
style.width=style.height="100%"
doc.head.appendChild(link);doc.body.appendChild(iframe)
location.replace("https://google.com")}}
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
