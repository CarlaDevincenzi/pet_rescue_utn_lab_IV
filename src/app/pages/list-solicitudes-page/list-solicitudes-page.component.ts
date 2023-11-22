import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Animal } from 'src/app/models/animal';
import { SolicitudAdopcion } from 'src/app/models/solicitudAdopcion';
import { User } from 'src/app/models/user';
import { AnimalService } from 'src/app/sevices/animal.service';
import { SolicitudesAdopcionService } from 'src/app/sevices/solicitudes-adopcion.service';
import { UserService } from 'src/app/sevices/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-solicitudes-page',
  templateUrl: './list-solicitudes-page.component.html',
  styleUrls: ['./list-solicitudes-page.component.css']
})
export class ListSolicitudesPageComponent {

  constructor(private solicitudService: SolicitudesAdopcionService, 
              private animalService: AnimalService, 
              private userService: UserService,
              private formBuilder: FormBuilder){
                this.formulario = this.formBuilder.group({
                  motivo: new FormControl('')
                })
              }

  solicitudesPendientes: Array<SolicitudAdopcion> = [];
  animal!: Animal | null;
  usuario!: User | null;
  rechazo: boolean = false;  

  formulario: FormGroup;
  
  get motivo() { return this.formulario.get('motivo')}
  
  ngOnInit(): void {
		this.solicitudService.getSolicitudes().subscribe({
			next: (response) => {
				this.solicitudesPendientes = response.filter( a => a.estado === "PENDIENTE")
			},
      error: (errorData) => {
        console.error(errorData);
        alert(errorData);
      }
		})
	}  

  verDatos(idAnimal: number, idUser: number){

      this.animalService.getAnimalById(idAnimal).subscribe({
        next: (response) => this.animal = response,
        error: (errorData) => alert(errorData)
      });

      this.userService.getUserById(idUser).subscribe({
        next: (response) => this.usuario = response,
        error: (errorData) => alert(errorData)
      })
  }

  aceptarAdopcion(solicitud: SolicitudAdopcion){
    if(this.animal !=null){
      this.animal.estado = "ADOPTADO" ;
      this.animalService.updateAnimal(this.animal).subscribe({
        next: (response) => {        
          console.log(response);
        },
        error: (errorData) => console.log(errorData)
      });    
  
      solicitud.estado = "ACEPTADA";
      this.solicitudService.updateSolicitud(solicitud).subscribe({
        next: (response) => {        
            Swal.fire("ADOPCION ACEPTADA!");
            console.log(response);         
            setTimeout(() => { 
              window.location.reload();          
            }, 3000);        
        },
        error: (errorData) => console.log(errorData)
      })
    }
    
  }

  rechazarAdopcion(){
    this.rechazo = true;    
  }

  submit(solicitud: SolicitudAdopcion){
    solicitud.estado = "RECHAZADA";
    solicitud.motivo = this.motivo?.value;
    this.solicitudService.updateSolicitud(solicitud).subscribe({
      next: (response) => {
        Swal.fire("SOLICITUD DE ADOPCION RECHAZADA");
        console.log(response);
        setTimeout(() => { 
          window.location.reload();        
        }, 3000); 
      },
      error: (errorData) => console.log(errorData)
    })
  }
}
