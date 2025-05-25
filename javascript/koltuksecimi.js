{
    const container = document.getElementById('seat-container');
    const buyButton = document.getElementById('buy-button');
    const countDisplay = document.getElementById('count');
    const rows = 10;
    const seatsPerRow = 10;

    for (let i = 0; i < rows; i++) {
      const rowDiv = document.createElement('div');
      rowDiv.className = 'row';

      const rowLetter = String.fromCharCode(65 + i); // A, B, C...

      // Etiket harfi (örnek: A)
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

    function updateCount() {
      const selectedSeats = document.querySelectorAll('.seat.selected');
      countDisplay.textContent = `Seçilen Koltuk: ${selectedSeats.length}`;
    }

    buyButton.addEventListener('click', () => {
      const selectedSeats = document.querySelectorAll('.seat.selected');
      selectedSeats.forEach(seat => {
        seat.classList.remove('selected');
        seat.classList.add('sold');
      });
      updateCount();
      alert("Koltuk(lar) başarıyla satın alındı!");
    });
}