function verifierMotDePasse() {
    const motDePasse = document.getElementById("motDePasse").value;

    if (motDePasse === "FIP") {
        // Rediriger vers une autre page (remplacez "autre_page.html" par le nom de votre page)
        window.location.href = "index2.html";
    } else {
        // Afficher un message d'erreur (optionnel)
        alert("Mot de passe incorrect");
    }
}