
window.addEventListener('load', async () => {
    // Vérifier si Metamask est installé
    if (typeof window.ethereum !== 'undefined') {
        // Attendre que l'utilisateur clique sur le bouton de connexion
        document.getElementById('bouton-connexion').addEventListener('click', async () => {
            try {
                // Demander l'autorisation de se connecter au compte Metamask de l'utilisateur
                await window.ethereum.request({ method: 'eth_requestAccounts' });
                console.log('Connecté avec succès !');
                // Ajouter le code pour effectuer des opérations sur le compte connecté ici
            } catch (e) {
                console.log(`Erreur : ${e.message}`);
            }
        });
    } else {
        console.log('Metamask n\'est pas installé.');
    }
});
