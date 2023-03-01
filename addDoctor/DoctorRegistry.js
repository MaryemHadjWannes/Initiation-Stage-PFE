// Cette partie de code utilise l'objet "ethereum" de la fenêtre
// du navigateur pour créer une instance de Web3 qui peut interagir
// avec un nœud Ethereum via Metamask.

const ethereum = window.ethereum;
const web3 = new Web3(ethereum); 

  // Adresse du contrat
const contractAddress = "0x05610ba5D81df38f10D9Cb188635859Eae80B260";

// Abi du contrat
const contractAbi = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_doctor",
				"type": "address"
			}
		],
		"name": "addDoctor",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_doctor",
				"type": "address"
			}
		],
		"name": "isDoctor",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

// Chargement du contrat
const contract = new web3.eth.Contract(contractAbi, contractAddress);

// Fonction pour vérifier si une adresse appartient à un médecin
async function isDoctor() {
  const checkAddress = document.getElementById("checkAddress").value;
  const isDoctor = await contract.methods.isDoctor(checkAddress).call();
  if (isDoctor) {
    console.log(`${checkAddress} est un médecin enregistré.`);
  } else {
    console.log(`${checkAddress} n'est pas un médecin enregistré.`);
  }
}

// Fonction pour ajouter un médecin
async function addDoctor() {
  const doctorAddress = document.getElementById("doctorAddress").value;
  await contract.methods.addDoctor(doctorAddress).send({ from: ethereum.selectedAddress });
  console.log("Médecin ajouté avec succès !");
}

// ^^^^^^^ from : "0xCD6E...2C7" "C'est l'adresse utilisée dans Metamask pour payer la transaction." ^^^^^^


/* 
-La fonction isDoctor() permet de vérifier si une adresse est celle d'un médecin enregistré dans le contrat intelligent.
-La fonction addDoctor() permet d'ajouter un médecin à la liste des médecins enregistrés dans le contrat intelligent.
-La fonction envoie également une transaction à la blockchain pour enregistrer la nouvelle adresse du médecin.
*/