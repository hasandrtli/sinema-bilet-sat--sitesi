{const container = document.getElementById('seat-container');
const buyButton = document.getElementById('buy-button');
const countDisplay = document.getElementById('count');
const rows = 10;
const seatsPerRow = 10;

// Koltukları oluştur
for (let i = 0; i < rows; i++) {
  const rowDiv = document.createElement('div');
  rowDiv.className = 'row';
  const rowLetter = String.fromCharCode(65 + i); // A, B, C...

  const label = document.createElement('div');
  label.className = 'label';
  label.textContent = rowLetter;
  rowDiv.appendChild(label);

  for (let j = 1; j <= seatsPerRow; j++) {
    const seat = document.createElement('div');
    const seatId = `${rowLetter}${j}`;
    seat.className = 'seat';
    seat.textContent = j;
    seat.dataset.id = seatId;

    seat.addEventListener('click', () => {
      if (!seat.classList.contains('sold')) {
        seat.classList.toggle('selected');
        updateCount();
      }
    });

    rowDiv.appendChild(seat);
  }

  container.appendChild(rowDiv);
}

// Seçili koltuk sayısını güncelle
function updateCount() {
  const selectedSeats = document.querySelectorAll('.seat.selected');
  countDisplay.textContent = `Seçilen Koltuk: ${selectedSeats.length}`;
}

// Satın alma işlemi
buyButton.addEventListener('click', () => {
  const selectedSeats = document.querySelectorAll('.seat.selected');
  if (selectedSeats.length === 0) {
    alert("Lütfen en az bir koltuk seçin.");
    return;
  }

  const filmData = JSON.parse(localStorage.getItem("secilenFilm"));
  const seansSaat = localStorage.getItem("secilenSeans") || "Bilinmiyor";
  const sepet = JSON.parse(localStorage.getItem("sepet")) || [];

  selectedSeats.forEach(seat => {
    seat.classList.remove('selected');
    seat.classList.add('sold');

    const yeniBilet = {
      film: filmData?.ad || "Film Bilgisi Yok",
      img: filmData?.resim || "images/default.jpg",
      seat: seat.dataset.id,
      time: seansSaat,
      price: 120
    };

    sepet.push(yeniBilet);
  });

  localStorage.setItem("sepet", JSON.stringify(sepet));
  updateCount();
  alert("Koltuk(lar) başarıyla sepete eklendi!");
});

updateCount();
}