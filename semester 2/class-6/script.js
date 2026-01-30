// Weather App JavaScript

// Function to update current date
function updateDate() {
    const now = new Date();
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
    };
    const dateString = now.toLocaleDateString('en-US', options);
    document.getElementById('current-date').textContent = dateString;
}

// Function to update current time
function updateTime() {
    const now = new Date();
    const options = { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: true 
    };
    const timeString = now.toLocaleTimeString('en-US', options);
    document.getElementById('current-time').textContent = timeString;
}

// Function to handle search
function searchWeather() {
    const cityInput = document.querySelector('.search-input').value;
    const cityElement = document.getElementById('city');
    
    if (cityInput.trim() !== '') {
        cityElement.textContent = cityInput.charAt(0).toUpperCase() + cityInput.slice(1);
    } else {
        cityElement.textContent = 'New York';
    }
}

// Function to update weather data randomly (simulated data)
function updateWeatherData() {
    // Random temperature between 15-35°C
    const temp = Math.floor(Math.random() * (35 - 15 + 1)) + 15;
    document.getElementById('temp').textContent = temp + '°';
    
    // Feels like (temp ± 3 degrees)
    const feelsLike = temp + Math.floor(Math.random() * 7) - 3;
    document.getElementById('feels-like').textContent = feelsLike + '°';
    
    // Min/Max temperature
    const minTemp = temp - Math.floor(Math.random() * 5) - 2;
    const maxTemp = temp + Math.floor(Math.random() * 5) + 2;
    document.getElementById('min-temp').textContent = minTemp + '°';
    document.getElementById('max-temp').textContent = maxTemp + '°';
    
    // Humidity (30-90%)
    const humidity = Math.floor(Math.random() * (90 - 30 + 1)) + 30;
    document.getElementById('humidity').textContent = humidity;
    
    // Wind (0-30 km/h)
    const wind = Math.floor(Math.random() * 31);
    document.getElementById('wind').textContent = wind;
    
    // Visibility (1-15 km)
    const visibility = Math.floor(Math.random() * (15 - 1 + 1)) + 1;
    document.getElementById('visibility').textContent = visibility;
    
    // Pressure (980-1040 hPa)
    const pressure = Math.floor(Math.random() * (1040 - 980 + 1)) + 980;
    document.getElementById('pressure').textContent = pressure;
    
    // Weather descriptions
    const descriptions = ['Sunny', 'Partly Cloudy', 'Cloudy', 'Mostly Sunny', 'Clear Sky'];
    const randomDesc = descriptions[Math.floor(Math.random() * descriptions.length)];
    document.getElementById('description').textContent = randomDesc;
}

// Event listeners
document.querySelector('.search-btn').addEventListener('click', function() {
    searchWeather();
    updateWeatherData();
});

document.querySelector('.search-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        searchWeather();
        updateWeatherData();
    }
});

// Initialize date and time
updateDate();
updateTime();

// Update time every second
setInterval(updateTime, 1000);

// Update weather data periodically (every 30 seconds)
updateWeatherData();
setInterval(updateWeatherData, 30000);

