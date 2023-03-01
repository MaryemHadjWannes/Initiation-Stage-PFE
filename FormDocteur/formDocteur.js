const gestionDocteursContractAddress = "0xf54Aa6E6557FAef531dc41eC398Ff4e75DBc9348"; // mettre l'adresse du contrat GestionDocteurs ici
const gestionDocteursAbi =[
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_ethereumAddress",
				"type": "address"
			},
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
				"name": "_genre",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_age",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_email",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_telephone",
				"type": "string"
			}
		],
		"name": "ajouterDocteur",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "docteurs",
		"outputs": [
			{
				"internalType": "address",
				"name": "ethereumAddress",
				"type": "address"
			},
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
				"name": "genre",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "age",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "email",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "telephone",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getDocteursCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]; // mettre l'ABI du contrat GestionDocteurs ici


//const web3 = new Web3("http://localhost:7545"); // mettre l'URL de votre nœud Ethereum ici

const web3 = new Web3(window.ethereum); // transaction passe par Metamask


// Instanciation du contrat
const gestionDocteursContract = new web3.eth.Contract(gestionDocteursAbi, gestionDocteursContractAddress);



function ajouterDocteur() {
  const ethereumAddress = document.getElementById("ethereumAddress").value;
  const nom = document.getElementById("nom").value;
  const prenom = document.getElementById("prenom").value;
  const genre = document.getElementById("genre").value;
  const age = document.getElementById("age").value;
  const email = document.getElementById("email").value;
  const telephone = document.getElementById("telephone").value;

  gestionDocteursContract.methods.ajouterDocteur(
    ethereumAddress,
    nom,
    prenom,
    genre,
    age,
    email,
    telephone
  ).send({ from: "0xCD6E16041d6E539E267C410639B56B4C0e90E2C7", gas:500000 }, function(error, result) { 
    if (error) {
      console.error(error);
    } else
    console.log(result);
    alert("Le docteur a été ajouté avec succès !");
    });
}

// ^^^^^^^ from : "0xCD6E...2C7" "C'est l'adresse utilisée dans Metamask pour payer la transaction." ^^^^^^

async function afficherDocteurs() {
    const docteursCount = await gestionDocteursContract.methods.getDocteursCount().call();
  
    for (let i = 0; i < docteursCount; i++) {
      const docteur = await gestionDocteursContract.methods.docteurs(i).call();
  
      // Afficher les données du docteur dans la console ou dans la page HTML
      console.log(docteur);
    }
  }
  
 /*
  "Vous pouvez consulter la liste des docteurs ajoutés dans le contrat intelligent
    en ouvrant la console d'inspection de votre navigateur et en naviguant jusqu'à l'onglet « Console »."
 */