import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/models/animal';
import { SolicitudAdopcion } from 'src/app/models/solicitudAdopcion';
import { AnimalService } from 'src/app/sevices/animal.service';
import { SessionService } from 'src/app/sevices/session.service';
import { SolicitudesAdopcionService } from 'src/app/sevices/solicitudes-adopcion.service';

@Component({
  selector: 'app-user-solicitudes',
  templateUrl: './user-solicitudes.component.html',
  styleUrls: ['./user-solicitudes.component.css']
})
export class UserSolicitudesComponent implements OnInit {
 
  misSolicitudes! : Array<SolicitudAdopcion>;
  userId!: number | null;
  animal!: Animal | null;

  constructor(private solicitud: SolicitudesAdopcionService, 
              private session: SessionService,
              private animalservice: AnimalService){}
 
  ngOnInit(): void {

    this.userId = this.session.getUsuarioLogueadoId();

        if(this.userId !=null) {
           this.solicitud.getSolicitudes().subscribe({
           next: (response) => {
            this.misSolicitudes = response.filter( a => a.idUser === this.userId)
            },
            error: (errorData) => {
            console.error(errorData);
            alert(errorData);
            }
          })
        }
   }

   verDatosAnimal(idAnimal: number){
      this.animalservice.getAnimalById(idAnimal).subscribe({
        next: (response) => this.animal = response,
        error: (errorData) => alert(errorData)
      });
   }

   
}
