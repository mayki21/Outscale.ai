// Execute the image slider creation function after the page has loaded

// Function to get the current time of a specific country and update the greeting
function updateGreeting() {
    const greetingElement = document.getElementById("greeting");
    const ip = parseInt(new URLSearchParams(window.location.search).get("ip"))|| 13
    const image=document.getElementById('image')

    if (!ip) {
        greetingElement.textContent = "Invalid IP";
        return;
    }

    let countryName = "";
    let timeZoneOffset = 0;

    if (ip % 2 === 1) {
        countryName = "India";
        timeZoneOffset = 0; // India's time zone offset from UTC (IST)
    } else {
        countryName = "England";
        timeZoneOffset = -5.5; // England's time zone offset from UTC (GMT)
    }

    if (ip % 10 === 0) {
        countryName = "America";
        timeZoneOffset = -9.5; // Eastern Time Zone in America (EDT)
    }

    const currentTime = new Date();
    console.log(currentTime)
    const localTime = new Date(currentTime.getTime() + timeZoneOffset * 3600 * 1000);
    console.log(localTime)

    let greeting = "Good Morning";
    image.src="./assets/morning.jpg"
    const localHour = localTime.getHours()
    console.log(localHour)

    if (localHour >= 12 && localHour < 18) {
        greeting = "Good Afternoon";
        image.src="./assets/afternoon.jpg"
    } else if (localHour >= 18 || localHour < 5) {
        greeting = "Good Night";
        image.src="./assets/night.jpg"
    }

    greetingElement.textContent = `${greeting} ${countryName}`;
}

// Wait for the page to load before executing the greeting update
window.addEventListener("load", updateGreeting);