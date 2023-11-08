import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from 'src/app/models/user';


@Component({
  selector: 'app-user-registration-form',
  templateUrl: './user-registration-form.component.html',
  styleUrls: ['./user-registration-form.component.css']
})
export class UserRegistrationFormComponent   {

  formulario: FormGroup = this.formBuilder.group({
    dni:0,
    apellido: '',
    nombre:'',
    calle:'',
    numero:0,
    piso:0,
    departamento: '',
    codigoPostal:0,
    telefono:0,
    email:'',
    password:'',
    integrantes:0,
    niños:'',
    mascota:'',
    especificacion:'',
    tipoVivienda:'',
    ambientes:0,
    patio:''
  })

  constructor(private formBuilder: FormBuilder ){}
  
  ngOninit(): void{}

  addUser(){
    console.log(this.formulario.value) //mostramos por consola los valores del formulario
  }
}