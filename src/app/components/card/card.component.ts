import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Animal } from 'src/app/models/animal';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() animal!: Animal;
  @ViewChild('myModal') modal!: ElementRef;
  
  abrirModal(){
    this.modal.nativeElement.classList.add('show');
    this.modal.nativeElement.style.display = 'block';
  }

  cerrarModal() {
    // Cierra el modal
    this.modal.nativeElement.classList.remove('show');
    this.modal.nativeElement.style.display = 'none';
  }
}


