// Get a reference to the form and input field
const lols = document.querySelector('#uv-form');
const mvov = document.querySelector('#uv-address');
lols.addEventListener('submit', function(event) {
  event.preventDefault();
  const encrypt = mvov.value;
  decodeSite(encrypt);
});

function decodeSite(encrypt) {
    const p_element = document.querySelector('#decoderesult');
    window.navigator.serviceWorker.register('../uv.sw-handler.js', {
        scope: __uv$config.prefix
    }).then(() => {
        p_element.textContent = __uv$config.decodeUrl(encrypt);
    });
  }