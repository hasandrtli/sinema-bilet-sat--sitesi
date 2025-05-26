{
    let cartItems = JSON.parse(localStorage.getItem("sepet")) || [];

    function renderCart() {
      const container = document.getElementById("cartContainer");
      const total = document.getElementById("totalPrice");
      container.innerHTML = "";
      let totalPrice = 0;

      cartItems.forEach(item => {
        totalPrice += item.price;
        const ticketHTML = `
          <div class="ticket">
            <img src="${item.img}" alt="${item.film}">
            <div class="ticket-info">
              <h3>${item.film}</h3>
              <p>Koltuk: ${item.seat}</p>
              <p>Seans: ${item.time}</p>
              <p>Fiyat: ${item.price}₺</p>
            </div>
          </div>`;
        container.innerHTML += ticketHTML;
      });

      total.textContent = "Toplam: " + totalPrice + "₺";
    }

    function togglePayment(method) {
      document.getElementById('cashBox').style.display = method === 'cash' ? 'block' : 'none';
      document.getElementById('cardBox').style.display = method === 'card' ? 'block' : 'none';
    }

    function clearCart() {
      localStorage.removeItem("sepet");
      cartItems = [];
      renderCart();
    }

    window.onload = () => {
      renderCart();

      const clearBtn = document.createElement('button');
      clearBtn.textContent = "Sepeti Temizle";
      clearBtn.className = "btn btn-danger mt-3";
      clearBtn.onclick = clearCart;
      document.getElementById("cartContainer").after(clearBtn);
    }
  }