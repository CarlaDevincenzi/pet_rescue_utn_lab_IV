import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/models/animal';
import { AnimalService } from 'src/app/sevices/animal.service';

@Component({
  selector: 'app-admin-list-animal-transito',
  templateUrl: './admin-list-animal-transito.component.html',
  styleUrls: ['./admin-list-animal-transito.component.css']
})
export class AdminListAnimalTransitoComponent implements OnInit{

  constructor(private animalService: AnimalService){} 
	
  animals: Array<Animal> = [];
  
  ngOnInit(): void {
		this.animalService.getAnimals().subscribe({
			next: (response) => {
				this.animals = response.filter( a => a.estado === "TRANSITO" )
			},
      error: (errorData) => {
        console.error(errorData);
        alert(errorData);
      }
		})
	}
}
