function createConfetti() {
  const confettiElements = [];
  const confettiColors = [
    "#FFD700",
    "#FF0000",
    "#FFFF00",
    "#FF00FF",
    "#00FFFF",
  ];

  const confettiCount = 100; // Adjust the number of confetti particles
  const confettiWidth = 10;
  const confettiHeight = 10;
  const confettiSpeed = 5;
  const gravity = 0.05;

  for (let i = 0; i < confettiCount; i++) {
    const confetti = document.createElement("div");
    confetti.className = "confetti";
    confetti.style.width = confettiWidth + "px";
    confetti.style.height = confettiHeight + "px";
    confetti.style.backgroundColor =
      confettiColors[Math.floor(Math.random() * confettiColors.length)];
    confetti.style.position = "absolute";
    confetti.style.top = Math.random() * window.innerHeight + "px";
    confetti.style.left = Math.random() * window.innerWidth + "px";
    confetti.style.transform = "rotate(" + Math.random() * 360 + "deg)";
    confetti.style.opacity = Math.random() * 0.7 + 0.3;
    document.body.appendChild(confetti);
    confettiElements.push(confetti);
  }

  function updateConfetti() {
    confettiElements.forEach((confetti) => {
      confetti.style.top = parseInt(confetti.style.top) + confettiSpeed + "px";
      confetti.style.left =
        parseInt(confetti.style.left) +
        (Math.random() * 2 - 1) * confettiSpeed +
        "px";
      confetti.style.transform =
        "rotate(" +
        (parseInt(
          confetti.style.transform.replace("rotate(", "").replace("deg)", "")
        ) +
          Math.random() * 5 -
          2.5) +
        "deg)";

      if (parseInt(confetti.style.top) > window.innerHeight) {
        confetti.style.top = 0 + "px";
        confetti.style.left = Math.random() * window.innerWidth + "px";
      }
    });

    requestAnimationFrame(updateConfetti);
  }

  updateConfetti();
}

function verifierMotDePasse() {
  const motDePasse = document.getElementById("motDePasse").value;
  var m = "f1p-frança1s-pur3-s0uch3";
  if (motDePasse === m) {
    //window.location.href = "index3.html";
    createConfetti();
    setTimeout(2000);
    alert("C'est tout pour aujourd'hui, reviens demain pour d'autres indices");
  } else {
    // Afficher un message d'erreur (optionnel)
    alert("Mot de passe incorrect");
  }
}
