import { Disponibilidad } from "./disponibilidad";
import { Domicilio } from "./domicilio";
import { Vivienda } from "./vivienda";

export class User{

    fechaRegistro: Date = new Date();
    id: number=0;
    tipo: Array<string>=[];
    dni: number=0;
    apellido: string='';
    nombre: string='';
    domicilio: Domicilio = new Domicilio();
    telefono: number=0;
    email: string='';
    contrasenia: string='';
    datosVivienda: Vivienda = new Vivienda();
    disponibilidad: Disponibilidad = new Disponibilidad();
       
}

