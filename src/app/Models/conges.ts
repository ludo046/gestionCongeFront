export interface addCongesInterface{
    collaborateur : {
        id : number;
    }
    dateDebut : string;
    dateFin : string;
    typeAbsence : string;
    motifAbsence : string;
}
export interface modifyCongesInterface{
    dateDebut : string;
    dateFin : string;
    typeAbsence : string;
    motifAbsence : string;
}