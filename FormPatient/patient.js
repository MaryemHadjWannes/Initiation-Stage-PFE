// Récupération de l'instance web3
const web3 = new Web3(Web3.givenProvider || "http://localhost:7545");

// Définition de l'adresse du contrat et de son ABI
const contractAddress = "0xC290FA807617B8D98184F4E4B4abeEb705caAc62";
const contractABI = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_nom",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_prenom",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_dateNaissance",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_sexe",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_adresse",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_ville",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_pays",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_telephone",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_email",
				"type": "string"
			}
		],
		"name": "ajouterPatient",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getPatients",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "nom",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "prenom",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "dateNaissance",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "sexe",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "adresse",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "ville",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "pays",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "telephone",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "email",
						"type": "string"
					}
				],
				"internalType": "struct PatientContract.Patient[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

// Instanciation du contrat
const patientContract = new web3.eth.Contract(contractABI, contractAddress);

// Fonction pour convertir une chaîne de caractères en bytes32
function toBytes32(text) {
  return web3.utils.fromAscii(text).padEnd(66, '0');
}

// Ajout d'un événement de soumission sur le formulaire
formulaire.addEventListener('submit', async (event) => {
  // Empêcher le formulaire de se soumettre et recharger la page
  event.preventDefault();

  // Récupération des données du formulaire
  const nom = formulaire.nom.value;
  const prenom = formulaire.prenom.value;
  const dateNaissance = formulaire.dateNaissance.value;
  const sexe = formulaire.sexe.value;
  const adresse = formulaire.adresse.value;
  const ville = formulaire.ville.value;
  const pays = formulaire.pays.value;
  const tel = formulaire.tel.value;
  const email = formulaire.email.value;

  // Conversion des chaînes de caractères en bytes32
  const nomBytes32 = toBytes32(nom);
  const prenomBytes32 = toBytes32(prenom);
  const adresseBytes32 = toBytes32(adresse);
  const villeBytes32 = toBytes32(ville);
  const paysBytes32 = toBytes32(pays);
  const emailBytes32 = toBytes32(email);

  // Envoi de la transaction pour ajouter un nouveau patient
  try {
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    const address = accounts[0];

    const gasPrice = await web3.eth.getGasPrice();
    const gasLimit = 600000;

    const txData = patientContract.methods.ajouterPatient(
      nomBytes32,
      prenomBytes32,
      dateNaissance,
      sexe,
      adresseBytes32,
      villeBytes32,
      paysBytes32,
      tel,
      emailBytes32
    ).encodeABI();

    const txObject = {
      from: address,
      to: contractAddress,
      gasPrice: gasPrice,
      gas: gasLimit,
      data: txData
    };

    const tx = await web3.eth.sendTransaction(txObject);
    console.log("Transaction hash:", tx);
  } catch (error) {
    console.error(error);
  }

  const patientTableBody = document.querySelector('#patientTable');


  // Création d'une nouvelle ligne de tableau
  const newRow = patientTableBody.insertRow();

  // Création de neuf cellules pour les données du patient
  const nomCell = newRow.insertCell();
  const prenomCell = newRow.insertCell();
  const dateNaissanceCell = newRow.insertCell();
  const sexeCell = newRow.insertCell();
  const adresseCell = newRow.insertCell();
  const villeCell = newRow.insertCell();
  const paysCell = newRow.insertCell();
  const telCell = newRow.insertCell();
  const emailCell = newRow.insertCell();

  // Remplissage des cellules avec les données du patient
  nomCell.textContent = nom;
  prenomCell.textContent = prenom;
  dateNaissanceCell.textContent = dateNaissance;
  sexeCell.textContent = sexe;
  adresseCell.textContent = adresse;
  villeCell.textContent = ville;
  paysCell.textContent = pays;
  telCell.textContent = tel;
  emailCell.textContent = email;

// Réinitialisation du formulaire
formulaire.reset();
});
