import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-availability-form',
  templateUrl: './user-availability-form.component.html',
  styleUrls: ['./user-availability-form.component.css']
})
export class UserAvailabilityFormComponent {
  
  formularioDis: FormGroup = this.formBuilder.group({
    startDate:'',
    endDate: '',
    size:'',
    especie:'otro',
    tipoEspecie:'',
    
  });

  constructor(private formBuilder: FormBuilder ){}
  
  ngOninit(): void{}

  addDis(){
    console.log(this.formularioDis.value) //mostramos por consola los valores del formulario

}

}