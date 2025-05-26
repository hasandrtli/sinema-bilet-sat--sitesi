{
    document.querySelectorAll('.film').forEach(filmDiv => {
      const filmImg = filmDiv.querySelector('img');
      const filmAd = filmImg.dataset.title;

      filmDiv.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', () => {
          localStorage.setItem("secilenSeans", button.textContent);

          const filmObjesi = {
            ad: filmAd,
            resim: filmImg.getAttribute('src')
          };

          localStorage.setItem("secilenFilm", JSON.stringify(filmObjesi));
          window.location.href = "koltuksecimi.html";
        });
      });
    });
}