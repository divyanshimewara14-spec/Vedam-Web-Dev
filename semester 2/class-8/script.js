const API_KEY = "b715f2a2fc474200a0543150262301";

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('header form');
  const input = document.querySelector('input[name="location"]');
  const card = document.querySelector('.card');

  // Load default city on page load
  getWeather('New Delhi');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(input.value);
    const city = input.value.trim();
    if (city === "") {
      alert("Please enter a city name");
      return;
    }
    getWeather(city);
  });

  function getWeather(city) {
    const url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data);

        // Format the date/time
        const localtime = data.location.localtime;
        const date = new Date(localtime);
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const dayName = days[date.getDay()];
        const timeStr = date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
        const dateStr = localtime.split(' ')[0];

        card.innerHTML = `
          <div class="temperature">${data.current.temp_c} °C</div>
          <div class="location-data">
            <div class="place">${data.location.name}, ${data.location.country}</div>
            <div class="date-time">
              <span class="time">${timeStr}</span>
              <span class="day">${dayName}</span>
              <span class="date">${dateStr}</span>
            </div>
          </div>
          <div class="weather-status">
            <div class="icon">
              <img src="https:${data.current.condition.icon}" alt="Weather Icon">
            </div>
            <div class="condition">${data.current.condition.text}</div>
          </div>
        `;
      })
      .catch(error => {
        card.innerHTML = `<div class="place">City not found ❌</div>`;
        console.error(error);
      });
  }
});
