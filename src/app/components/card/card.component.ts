import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() img_src!: string;
  @Input() title!: string;
  @Input() short_description!: string;

  verMas() {
    // TODO: Aca va la logica para mostrar un modal con la ficha completa del animal, y el boton de adoptar
    alert("Elegiste este animalito");
  }
}
