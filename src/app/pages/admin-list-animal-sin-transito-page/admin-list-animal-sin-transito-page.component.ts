import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/models/animal';
import { AnimalService } from 'src/app/sevices/animal.service';

@Component({
  selector: 'app-admin-list-animal-sin-transito-page',
  templateUrl: './admin-list-animal-sin-transito-page.component.html',
  styleUrls: ['./admin-list-animal-sin-transito-page.component.css']
})
export class AdminListAnimalSinTransitoPageComponent implements OnInit {
  
  constructor(private animalService: AnimalService){} 
	
  animals: Array<Animal> = [];
  
  ngOnInit(): void {
		this.animalService.getAnimals().subscribe({
			next: (response) => {
				this.animals = response.filter( a => a.estado === "PENDIENTE" )
			},
      error: (errorData) => {
        console.error(errorData);
        alert(errorData);
      }
		})
	}
}
