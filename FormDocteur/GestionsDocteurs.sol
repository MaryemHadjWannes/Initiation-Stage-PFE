pragma solidity ^0.8.0;

contract GestionDocteurs {


    struct Docteur {
        address ethereumAddress;
        string nom;
        string prenom;
        string genre;
        uint age;
        string email;
        string telephone;
    }

    Docteur[] public docteurs; //Tableau des docteurs


    //fonction pour ajouter un docteur dans le smart contract
    function ajouterDocteur(
        address _ethereumAddress,
        string memory _nom,
        string memory _prenom,
        string memory _genre,
        uint _age,
        string memory _email,
        string memory _telephone
    ) public {
        Docteur memory nouveauDocteur = Docteur({
            ethereumAddress: _ethereumAddress,
            nom: _nom,
            prenom: _prenom,
            genre: _genre,
            age: _age,
            email: _email,
            telephone: _telephone
        });

        docteurs.push(nouveauDocteur);
    }


    //fonction pour retourne le nombre de docteurs ajoutés dans le Tableau "docteurs"
    function getDocteursCount() public view returns (uint) {
    return docteurs.length;
}

}
