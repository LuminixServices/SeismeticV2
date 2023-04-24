// SKIDDED FROM BALLBANG BECAUSE THEY SKIDDED OUR CODE🤣
const form = document.querySelector('form');
const input = document.querySelector('input');
var hash = window.location.hash;
if(hash){

    var url  = hash.replace('#','');
    openSite(`https://html5.gamedistribution.com/rvvASMiM/${url}/?gd_sdk_referrer_url=https://gamedistribution.com/games/crazy-dunk`);
}



form.addEventListener('submit', async event => {
    event.preventDefault();
    window.navigator.serviceWorker.register('./sw.js', {
        scope: __uv$config.prefix
    }).then(() => {
        let url = input.value.trim();
        if (!isUrl(url)) url = 'https://www.google.com/search?q=' + url;
        else if (!(url.startsWith('https://') || url.startsWith('http://'))) url = 'http://' + url;


        window.location.href = __uv$config.prefix + __uv$config.encodeUrl(url);
    });
});


// Get a reference to the form and input field
const lols = document.querySelector('#uv-form');
const mvov = document.querySelector('#uv-address');

// Add an event listener to the form that listens for the "submit" event
lols.addEventListener('submit', function(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the value of the input field
  const url = mvov.value;

  // Call the existing openSite() function with the URL as the argument
  openSite(url);
});


function openSite(url){
window.navigator.serviceWorker.register('../uv.sw-handler.js', {
    scope: __uv$config.prefix
}).then(() => {
    // let url = input.value.trim();
    if (!isUrl(url)) url = 'https://www.google.com/search?q=' + url;
    else if (!(url.startsWith('https://') || url.startsWith('http://'))) url = 'http://' + url;


    window.location.href = __uv$config.prefix + __uv$config.encodeUrl(url);
});

}
function isUrl(val = ''){
if (/^http(s?):\/\//.test(val) || val.includes('.') && val.substr(0, 1) !== ' ') return true;
return false;
};