
// Un formulaire de connexion avec un nom d'utilisateur (l'adresse Ethereum) et un mot de passe. dans "page1.hmtl"


const adminAddress = "0x1234567890123456789012345678901234567890"; // remplacez par votre adresse d'admin
const adminPassword = "admin123"; // remplacez par votre password d'admin

// Récupération des données du formulaire
const loginForm = document.getElementById("loginForm");
const addressInput = document.getElementById("addressInput");
const passwordInput = document.getElementById("passwordInput");
const loginButton = document.getElementById("loginButton");


loginButton.addEventListener("click", () => {
  if (addressInput.value === adminAddress && passwordInput.value === adminPassword) {
    alert("Authentication successful!");
    
    // ajoutez votre code pour rediriger vers la zone d'authentification ici
    window.location.replace("../FormDocteur/Docteur.html"); // rediriger vers la page "Docteur.html" après une authentification réussie

  } else {
    alert("Invalid address or password!");
  }
});
