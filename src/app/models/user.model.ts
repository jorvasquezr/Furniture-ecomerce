export interface User {
    id: number;
    name: string;
    email: string;
    direccion: string;
    correo: string;
    rol: UserRole;
}

export enum UserRole {
    CLIENTE = 0,
    GERENTE = 1,
    EMPLEADO = 2,
    GERENTE_GENERAL = 3
}