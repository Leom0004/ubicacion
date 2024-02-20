document.addEventListener("DOMContentLoaded", function() {
    getTime();
    getDate();
    getLocation();
});

function getTime() {
    const timeElement = document.getElementById('time');
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    timeElement.textContent = `Time: ${timeString}`;
}

function getDate() {
    const dateElement = document.getElementById('date');
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = now.toLocaleDateString(undefined, options);
    dateElement.textContent = `Date: ${dateString}`;
}

function getLocation() {
    const locationElement = document.getElementById('location');
    // For demonstration purpose, let's just pretend the location is "New York, USA"
    const locationString = "Location: New York, USA";
    locationElement.textContent = locationString;
}
