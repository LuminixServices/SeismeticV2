if (document.cookie.indexOf("SafeMode=true") !== -1) {

    var keywords = ["PornHub", "Onlyfans", "BBC"];
  
    var containers = document.getElementsByTagName("body")[0].querySelectorAll("div.container");
    for (var i = 0; i < containers.length; i++) {
      var pElement = containers[i].querySelector("p");
      if (pElement) {
        for (var j = 0; j < keywords.length; j++) {
          if (pElement.textContent.includes(keywords[j])) {
            var containerParent = containers[i].parentNode;
            containerParent.removeChild(containers[i].previousSibling);
            containerParent.removeChild(containers[i].nextSibling);
            containerParent.removeChild(containers[i]);
            break;
          }
        }
      }
    }
  }
  