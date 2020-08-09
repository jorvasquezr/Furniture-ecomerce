export interface User {
    name: string;
    lastName:String;
    email: string;
    telefono:string;
    password:string;
    tipo: UserRole;
}

export enum UserRole {
    CLIENTE = 0,
    GERENTE = 1,
    EMPLEADO = 2,
    GERENTE_GENERAL = 3
}