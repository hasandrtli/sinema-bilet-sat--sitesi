{
    async function getWeather() {
        apiKey = '6aea714293ec9e4195a630e28b26bf99';
        city = 'Erzurum';
        url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=tr&appid=${apiKey}`;

      try {
        const response = await fetch(url);
        const data = await response.json();

        const temp = data.main.temp;
        const description = data.weather[0].description;
        const cityName = data.name;

        document.getElementById('weather-info').innerText =
          `${cityName}: ${temp}°C, ${description}`;
      } catch (error) {
        console.error('Hava durumu alınamadı:', error);
        document.getElementById('weather-info').innerText =
          'Hava durumu bilgisi alınamadı.';
      } 
    }

    window.onload = getWeather;

    const kartlar = document.querySelectorAll('.kartlik');

kartlar.forEach(function (kart) {
    kart.addEventListener('click', function () {
        // Önce tüm kartlardan 'expanded' sınıfını kaldır
        kartlar.forEach(function (k) {
            if (k !== kart) {
                k.classList.remove('expanded');
            }
        });

        // Tıklanan karta toggle uygula (kapalıysa aç, açıksa kapa)
        kart.classList.toggle('expanded');
    });
});




}