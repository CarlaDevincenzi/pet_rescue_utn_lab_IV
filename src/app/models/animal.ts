export class Animal {
    id:number = 0;
    fechaRegistro: Date = new Date();
    estado:string = 'PENDIENTE'; //TRANSITO, ADOPTADO, PENDIENTE
    nombre:string = '';
    especie:string = ''; //GATO, PERRO
    sexo:string = ''; // MACHO, HEMBRA
    tamanio:string = ''; //CHICO, MEDIANO, GRANDE
    edad:number = 0;
    descripcion:string = '';
    compatibilidad: Array<string> = []; //NIÑOS, PERROS, GATOS
    imagenes: Array<string> = [];
    idUsuario:number | null = null;
}