pragma solidity ^0.8.0;

contract PatientContract {
    struct Patient {
        string nom;
        string prenom;
        string dateNaissance;
        string sexe;
        string adresse;
        string ville;
        string pays;
        string telephone;
        string email;
    }
    
    mapping(address => Patient) private patients;
    address[] private patientIndex;
    
    function ajouterPatient(string memory _nom, string memory _prenom, string memory _dateNaissance, string memory _sexe, string memory _adresse, string memory _ville, string memory _pays, string memory _telephone, string memory _email) public {
        Patient storage patient = patients[msg.sender];
        patient.nom = _nom;
        patient.prenom = _prenom;
        patient.dateNaissance = _dateNaissance;
        patient.sexe = _sexe;
        patient.adresse = _adresse;
        patient.ville = _ville;
        patient.pays = _pays;
        patient.telephone = _telephone;
        patient.email = _email;
        
        if (patientIndex.length == 0 || patientIndex[patientIndex.length - 1] != msg.sender) {
            patientIndex.push(msg.sender);
        }
    }
    
    function getPatients() public view returns (Patient[] memory) {
        Patient[] memory result = new Patient[](patientIndex.length);
        for (uint i = 0; i < patientIndex.length; i++) {
            address patientAddress = patientIndex[i];
            result[i] = patients[patientAddress];
        }
        return result;
    }
}
