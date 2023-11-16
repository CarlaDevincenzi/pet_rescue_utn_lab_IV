import { Component, Input } from '@angular/core';
import { Animal } from 'src/app/models/animal';

@Component({
  selector: 'app-list-animal',
  templateUrl: './list-animal.component.html',
  styleUrls: ['./list-animal.component.css']
})
export class ListAnimalComponent {

  constructor(){}   

  @Input() animals: Array<Animal> = [];

}
