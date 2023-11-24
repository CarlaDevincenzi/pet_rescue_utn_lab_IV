import { Component, Input, OnInit,  } from '@angular/core';
import { Animal } from 'src/app/models/animal';
import { AnimalService } from 'src/app/sevices/animal.service';

@Component({
  selector: 'app-user-home-page',
  templateUrl: './user-home-page.component.html',
  styleUrls: ['./user-home-page.component.css']
})
export class UserHomePageComponent implements OnInit {
  
  constructor(private animalService: AnimalService){} // TODO: inyectar service de animal, para hacer el getAll
	
  animals: Array<Animal> = [];

  ngOnInit(): void {
		this.animalService.getAnimals().subscribe({
			next: (response) => {
				this.animals = response.filter( a => a.estado !== "ADOPTADO" )
			},
      error: (errorData) => {
        console.error(errorData);
        alert(errorData);
      }
		})
	}

  
}
