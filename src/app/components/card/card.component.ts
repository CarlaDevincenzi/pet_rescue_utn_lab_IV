import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Animal } from 'src/app/models/animal';
import { SolicitudAdopcion } from 'src/app/models/solicitudAdopcion';
import { AnimalService } from 'src/app/sevices/animal.service';
import { SessionService } from 'src/app/sevices/session.service';
import { SolicitudesAdopcionService } from 'src/app/sevices/solicitudes-adopcion.service';
import { UserService } from 'src/app/sevices/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() animal!: Animal;
  @ViewChild('myModal') modal!: ElementRef;
  
  variable: boolean = false;
  userId = this.sessionService.getUsuarioLogueadoId();
  userType = this.sessionService.getTipoUsuarioLogueado();


  constructor(private sessionService: SessionService,
              private userService: UserService,
              private solicitudService: SolicitudesAdopcionService,
              private animalService: AnimalService) {}
              
   abrirModal(){
    this.modal.nativeElement.classList.add('show');
    this.modal.nativeElement.style.display = 'block';
  }

  cerrarModal() {
    // Cierra el modal
    this.modal.nativeElement.classList.remove('show');
    this.modal.nativeElement.style.display = 'none';
  }
  
  adoptar(animalId: number){
     
    if(this.userId !== null ) {
        const solicitud: SolicitudAdopcion = new SolicitudAdopcion();
        solicitud.idUser = this.userId;
        solicitud.idAnimal = animalId;
        console.log(solicitud);
        this.solicitudService.createSolicitud(solicitud).subscribe({
          next: (response) => {
            Swal.fire({
              title: '¡SOLICITUD GENERADA CON EXITO!',
              text: 'Será evaluada y nos comunicaremos. MUCHAS GRACIAS!!',
              icon: 'success',
              confirmButtonText: 'OK',
            });
            this.variable = true;              
          },
          error: (errorData) => {
            console.error(errorData);
          }
        })
    } else {
        Swal.fire('Previamente INICIE SESION ó REGISTRESE en el sistema. ¡¡Muchas Gracias!!');
    }
  }

  asignarTransito(animal: Animal){
    const idIngresado = window.prompt('Ingrese el ID del usuario a asignar:');
    console.log('Valor ingresado:', idIngresado);

    if(idIngresado !== null) {
      this.userService.getUserById(parseInt(idIngresado)).subscribe({
        next: (response) => {
            animal.idUsuario = parseInt(idIngresado);
            animal.estado = 'TRANSITO';
            this.animalService.updateAnimal(animal).subscribe({
              next: (response) => {
                Swal.fire({
                  title: 'Actualizacion realizada con exito!',
                  icon: 'success'})
                  
                  setTimeout(() => { 
                    window.location.reload();          
                  }, 3000);     
              },
              error: (errorData) => alert(errorData)
            });
        },
        error: (errorData) => Swal.fire({
          title: 'USUARIO NO ENCONTRADO',
          icon: 'error'          
        })
      })
    }      
  }


}


