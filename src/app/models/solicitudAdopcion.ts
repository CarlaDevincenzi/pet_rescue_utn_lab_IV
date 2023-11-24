export class SolicitudAdopcion {
    id!:number ;
    idUser!:number;
    idAnimal!:number;
    fechaSolicitud: Date = new Date();
    estado:string = "PENDIENTE" // (aprobada/cancelada/pendiente)
    motivo:string = '';
}

