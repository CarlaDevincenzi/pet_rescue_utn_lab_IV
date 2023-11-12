import { Component, OnInit,Input } from '@angular/core';
import { FormControl, FormGroup,Validators} from '@angular/forms';
import { User } from 'src/app/models/user';


@Component({
  selector: 'app-user-registration-form',
  templateUrl: './user-registration-form.component.html',
  styleUrls: ['./user-registration-form.component.css']
})
export class UserRegistrationFormComponent  {
  message: string = '';
  
  

  formulario = new  FormGroup({
    dni: new FormControl('',
    [Validators.required, Validators.minLength(6)]),
    apellido: new FormControl('', [ Validators.required, Validators.minLength(3)]),
    nombre:new FormControl(''),
    calle:new FormControl(''),
    numero:new FormControl(''),
    piso:new FormControl(''),
    departamento: new FormControl(''),
    codigoPostal:new FormControl(''),
    telefono:new FormControl(''),
    email:new FormControl('',[Validators.required, Validators.email]),
    password:new FormControl(''),
    integrantes:new FormControl(''),
    niños:new FormControl(''),
    mascota:new FormControl(''),
    especificacion:new FormControl(''),
    tipoVivienda:new FormControl(''),
    ambientes:new FormControl(''),
    patio:new FormControl('')
  })

  get dni() { return this.formulario.get('dni')}
  get apellido() {return this.formulario.get('apellido')}
  get nombre() {return this.formulario.get('nombre')}
  get calle() {return this.formulario.get('calle')}
  get numero() {return this.formulario.get('numero')}
  get piso() {return this.formulario.get('piso')}
  get departamento() { return this.formulario.get('departamento')}
  get codigoPostal() {return this.formulario.get('codigoPostal')}
  get telefono() {return this.formulario.get('telefono')}
  get email() {return this.formulario.get('email')}
  get password() {return this.formulario.get('password')}
  get integrantes() {return this.formulario.get('integrantes')}
  get niños() { return this.formulario.get('niños')}
  get mascota() {return this.formulario.get('mascota')}
  get especificaciones() {return this.formulario.get('especificaciones')}
  get tipoVivienda() {return this.formulario.get('tipoVivienda')}
  get ambientes() {return this.formulario.get('ambientes')}
  get patio() {return this.formulario.get('patio')}
   

  
  constructor( ){}  
  
  ngOnInit():void{}
  
  submit(){
   
    if (this.formulario.status)
    console.log(this.formulario.value)

  //   // if (this.formulario.status)
  //   // alert("debe completar todos los campos")
  // else
  //   console.log(this.user)
  }
  addUser(){
    // this.formulario.get('apellido')
    // console.log(this.formulario.value) //mostramos por consola los valores del formulario
  }

}