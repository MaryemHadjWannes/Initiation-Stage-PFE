# Stage-PFE-CRNS

## Description

Ce projet est un petit démo qui illustre quelques fonctionnalités pour connecter JavaScript avec des smart contracts via le web3.

## Prérequis

Avant de pouvoir utiliser ce projet, vous devez avoir les outils suivants installés sur votre machine :

* Visual Studio Code
* Remix ( https://remix.ethereum.org )
* Metamask
* Ganache

## Fonctionnalités
* Connexion à un smart contract à travers le web3
* Lecture de données sur le smart contract
* Écriture de données sur le smart contract

## Utilisation

1. Cloner le repository : git clone https://github.com/MaryemHadjWannes/Stage-PFE-CRNS.git

2. Ouvrir le projet dans Visual Studio Code
3. Dans Remix, ouvrir les fichiers ***patient.sol***, ***GestionDocteurs.sol*** et ***DoctorRegistry.sol***

4. Compiler et déployer ces smart contracts sur le réseau local Ganache/Metamask

5. Dans Remix, copier l'adresse et l'ABI de chaque smart contract déployé

6. Dans le fichier ***'patient.js'*** (Etape1_Connect JS_SmartContract\FormPatient\patient.js), remplacer ***'contractAddress'*** et ***'contractABI'*** par l'adresse et l'ABI du smart contract ***patient.sol***

7. Dans le fichier ***'formDocteur.js'*** (Etape1_Connect JS_SmartContract\FormDocteur\formDocteur.js), remplacer ***'gestionDocteursContractAddress'*** et ***'gestionDocteursAbi'*** par l'adresse et l'ABI du smart contract ***GestionsDocteur.sol***

8. Dans le fichier ***'DoctorRegistry.js'*** (Etape1_Connect JS_SmartContract\addDoctor\DoctorRegistry.js), remplacer ***'contractAddress'*** et ***'contractAbi'*** par l'adresse et l'ABI du smart contract ***DoctorRegistry.js.sol***
9. Ouvrir le fichier ***'page1.html'*** dans le dossier (Page1) dans le navigateur.
10. Cliquer sur le bouton ***"se connecter avec Metamask"***
11. Saisir votre adresse et votre mot de passe dans le formulaire d'authentification (définis dans le fichier auth.js)
```javascript
const adminAddress = "0x1234567890123456789012345678901234567890"; // remplacez par votre adresse d'admin
const adminPassword = "admin123"; // remplacez par votre password d'admin
```


              *** n'est pas nécessaire de faire 'npm install' ***
              
### Bibliothèque web3
 la bibliothèque Web3.js est importée depuis un CDN (Content Delivery Network)pour être utilisée dans la page web en cours de développement.
```html
<script src="https://cdn.jsdelivr.net/npm/web3@1.5.2/dist/web3.min.js"></script>
```


## Les interfaces

### page1.html

- Le bouton en haut ***"Se connecter sur Metamask"*** 
- Formulaire d'authentifictaion voir ***'11.'*** dans la section ***'Utilisation'***

![page1.html](https://github.com/MaryemHadjWannes/Stage-PFE-CRNS/blob/master/captures%20projet/page1.png)

### Docteur.html

- Formulaire à remplir pour ajouter un docteur sur le smart contract ***'GestionsDocteurs.sol'*** .

![IMAGE ALT TEXT HERE](https://github.com/MaryemHadjWannes/Stage-PFE-CRNS/blob/master/captures%20projet/formDocteur.png)

- La transaction passe à travers le Wallet ***"Metamask"***, l'adresse de la transaction est affichée sur le console.

![IMAGE ALT TEXT HERE](https://github.com/MaryemHadjWannes/Stage-PFE-CRNS/blob/master/captures%20projet/AjoutDocteur.png)

- à travers le bouton ***"Liste des Docteurs"*** vous pouvez voir la liste des docteurs déja ajoutés dans le smart contract  ***'GestionsDocteurs.sol'*** .

![IMAGE ALT TEXT HERE](https://github.com/MaryemHadjWannes/Stage-PFE-CRNS/blob/master/captures%20projet/ListeDesDocteurs.png)

### patient.html

- Formulaire à remplir pour ajouter un patient sur le smart contract ***'patient.sol'*** .

![IMAGE ALT TEXT HERE](https://github.com/MaryemHadjWannes/Stage-PFE-CRNS/blob/master/captures%20projet/formPatient.png)

- La transaction passe à travers le Wallet ***"Metamask"***, le log de la transaction est affichée sur le console.

![IMAGE ALT TEXT HERE](https://github.com/MaryemHadjWannes/Stage-PFE-CRNS/blob/master/captures%20projet/TransactionHashPatient.png)

### index.html 

![IMAGE ALT TEXT HERE](https://github.com/MaryemHadjWannes/Stage-PFE-CRNS/blob/master/captures%20projet/Vérifier.png)

- le bouton ***"Vérifie"*** Vérifier si l'adresse est enregistrée ou non, si l'adresse est enregistrée il affiche dans le console ***"est un médecin enregistré"*** sinon il affiche ***"n'est pas un médecin enregistré"***.
- le bouton ***"Ajout"*** Ajoute l'adresse de médecin dans le smart contract ***'DoctorRegistry'***

![IMAGE ALT TEXT HERE](https://github.com/MaryemHadjWannes/Stage-PFE-CRNS/blob/master/captures%20projet/Ajout-Verf.png)

### solde.html

-   Affiche l'adressse de compte Connecté avec Metamask, le solde et le network.

1.
![IMAGE ALT TEXT HERE](https://github.com/MaryemHadjWannes/Stage-PFE-CRNS/blob/master/captures%20projet/localhost.png)

2.
![IMAGE ALT TEXT HERE](https://github.com/MaryemHadjWannes/Stage-PFE-CRNS/blob/master/captures%20projet/goerli.png)
