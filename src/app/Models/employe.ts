export interface addEmployeModel{
    nom : string;
    prenom: string;
    identifiant: string;
    motDePasse: string; 
    // manager: {
    //     id : number
    //     nom : string;
    //     prenom: string;
    //     identifiant: string;
    // }; 
}
export interface modifyEmployeModel{
    id : number;
    nom : string;
    prenom: string;
    identifiant: string;
    motDePasse: string;
    manager: number; 
}