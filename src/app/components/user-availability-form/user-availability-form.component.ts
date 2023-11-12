import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-availability-form',
  templateUrl: './user-availability-form.component.html',
  styleUrls: ['./user-availability-form.component.css']
})
export class UserAvailabilityFormComponent {
  


  formularioDis = new FormGroup ({
    startDate: new FormControl(''),
    endDate: new FormControl(''),
    size:new FormControl(''),
    especie:new FormControl(''),
 
    
  });

  get startDate() {return this.formularioDis.get('startDate')}
  get endDate() {return this.formularioDis.get('endDate')}
  get size() {return this.formularioDis.get('size')}
  get especie() {return this.formularioDis.get('especie')}


  constructor( ){}
  
  ngOninit(): void{}

  addDis(){
    // console.log(this.formularioDis.value) //mostramos por consola los valores del formulario

}

}