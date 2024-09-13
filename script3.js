function verifierMotDePasse() {
  const motDePasse = document.getElementById("motDePasse").value;
  var m = "f1p-frança1s-pur3-s0uch3";
  if (motDePasse === m) {
    window.location.href = "index4.html";
  } else {
    alert("Mot de passe incorrect");
  }
}
