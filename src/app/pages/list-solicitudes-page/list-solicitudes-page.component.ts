import { Component } from '@angular/core';
import { Animal } from 'src/app/models/animal';
import { SolicitudAdopcion } from 'src/app/models/solicitudAdopcion';
import { User } from 'src/app/models/user';
import { AnimalService } from 'src/app/sevices/animal.service';
import { SolicitudesAdopcionService } from 'src/app/sevices/solicitudes-adopcion.service';
import { UserService } from 'src/app/sevices/user.service';

@Component({
  selector: 'app-list-solicitudes-page',
  templateUrl: './list-solicitudes-page.component.html',
  styleUrls: ['./list-solicitudes-page.component.css']
})
export class ListSolicitudesPageComponent {

  constructor(private solicitudService: SolicitudesAdopcionService, 
              private animalService: AnimalService, 
              private userService: UserService){}

  solicitudesPendientes: Array<SolicitudAdopcion> = [];
  animal!: Animal;
  usuario!: User;
  
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
}
