pragma solidity ^0.8.0;

contract DoctorRegistry {
    
    mapping(address => bool) private doctors;
    
    // Ajouter un nouveau docteur à la liste
    function addDoctor(address _doctor) public {
        doctors[_doctor] = true;
    }
    
    // Vérifier si l'adresse du docteur est enregistrée
    function isDoctor(address _doctor) public view returns(bool) {
        return doctors[_doctor];
    }
}



