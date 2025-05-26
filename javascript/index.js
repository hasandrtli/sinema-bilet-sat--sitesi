// Hava Durumu Çekme
async function getWeather() {
  const apiKey = '6aea714293ec9e4195a630e28b26bf99';
  const city = 'Erzurum';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=tr&appid=${apiKey}`;

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

// Vizyondaki Filmleri Çekme
function getMovies() {
  const API_KEY = "2962760c2dc0abde4fb88980ea3a7c61";

  fetch(`https://api.themoviedb.org/3/movie/now_playing?language=tr-TR&region=TR&api_key=${API_KEY}`)
    .then(res => res.json())
    .then(data => {
      const container = document.getElementById("duyuru-listesi");
      data.results.slice(0, 6).forEach(film => {
        const card = document.createElement("div");
        card.className = "col-md-4 mb-3";
        card.innerHTML = `
  <div class="cardjs h-100 shadow-sm">
    <img src="https://image.tmdb.org/t/p/w500${film.poster_path}" class="card-img-top" style="width:200px; height:auto; border-radius:12px; padding:3px;" alt="${film.title}">
    <div class="card-bodys">
      <div class="card-body">
      <h5 class="card-title">${film.title}</h5>
      </div>
      <div class="card-bodytwo">
        <p class="card-text">${film.overview.substring(0, 100)}...</p>
        <p class="text-muted">Vizyon Tarihi: ${film.release_date}</p>
      </div>
    </div>
  </div>
`;

        container.appendChild(card);
      });
    })
    .catch(err => {
      console.error("Film verisi alınamadı:", err);
      document.getElementById("duyuru-listesi").innerHTML = "<p>Veri alınamadı.</p>";
    });
}

// Kart Genişletme
function activateCardExpansion() {
  const kartlar = document.querySelectorAll('.kartlik');

  kartlar.forEach(function (kart) {
    kart.addEventListener('click', function () {
      kartlar.forEach(function (k) {
        if (k !== kart) {
          k.classList.remove('expanded');
        }
      });
      kart.classList.toggle('expanded');
    });
  });
}

// Film bilgisi localStorage'a kaydetme
function setFilmToStorage() {
  document.querySelectorAll('.kartlik .btntext').forEach((link, index) => {
    link.addEventListener('click', function () {
      const kart = document.querySelectorAll('.kartlik')[index];
      const filmAdi = kart.querySelector('p').innerText;
      const filmResmi = kart.querySelector('img').getAttribute('src');

      const filmObjesi = {
        ad: filmAdi,
        resim: filmResmi
      };

      localStorage.setItem("indextenSecilenFilm", JSON.stringify(filmObjesi));
    });
  });
}

// Sayfa yüklenince çalışacaklar
window.onload = function () {
  getWeather();
  getMovies();
  activateCardExpansion();
  setFilmToStorage();
};
