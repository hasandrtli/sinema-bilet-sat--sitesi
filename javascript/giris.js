{
    document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("exampleInputEmail1").value.trim();
  const password = document.getElementById("exampleInputPassword1").value;
  const errorBox = document.getElementById("error-message");

  const dogruEmail = "kullanici123@hotmail.com";
  const dogruSifre = "password61.";

  if (email === dogruEmail && password === dogruSifre) {
    // Giriş başarılı → yönlendir
    errorBox.textContent = ""; // hata yoksa mesajı temizle
    window.location.href = "index.html";
  } else {
    // Giriş başarısız → uyarı göster
    errorBox.textContent = "E-posta veya şifre hatalı. Lütfen tekrar deneyin.";
  }
});
}