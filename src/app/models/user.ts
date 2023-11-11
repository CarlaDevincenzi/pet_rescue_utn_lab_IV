import { Domicilio } from "./domicilio";
import { Vivienda } from "./vivienda";

export class User{

    fechaRegistro: Date = new Date();
    idUsuario: number=0;
    tipo: Array<string>=[];
    dni: number=0;
    apellido: string='';
    nombre: string='';
    domicilio: Domicilio = new Domicilio();
    telefono: number=0;
    email: string='';
    contraseña: string='';
    datosVivienda: Vivienda = new Vivienda();
    disponibilidad: object = {
        date1:'',
        date2:'',
        size:'',
        especie:'',
        tipoEspecie:''
    }




}

