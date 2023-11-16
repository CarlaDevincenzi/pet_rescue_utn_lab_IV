import { Component, OnInit,Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime } from 'rxjs';
import { CustomValidator } from 'src/app/common/customValidator';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/sevices/user.service';


@Component({
  selector: 'app-user-registration-form',
  templateUrl: './user-registration-form.component.html',
  styleUrls: ['./user-registration-form.component.css']
})
export class UserRegistrationFormComponent  {
  message: string = '';
  mostrarComponenteDisponibilidad: boolean = false;
  tieneMascota: boolean = false;
  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router ){

    this.formulario = this.formBuilder.group({
      dni: new FormControl('',
      [Validators.required,Validators.pattern('^[0-9]+$')], CustomValidator.asyncDniExists(userService)),
      apellido: new FormControl('', [ Validators.required, Validators.minLength(3), Validators.pattern(/^[a-zA-Z]+$/)]),
      nombre:new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]),
      calle:new FormControl('', [Validators.required]),
      numero:new FormControl('',[Validators.required, Validators.pattern('^[0-9]+$')]),
      piso:new FormControl('', [Validators.pattern('^[0-9]+$')]),
      departamento: new FormControl(''),
      codigoPostal:new FormControl('',[Validators.required, Validators.pattern('^[0-9]+$')]),
      telefono:new FormControl('',[Validators.required, Validators.pattern('^[0-9]+$')]),
      email:new FormControl('',[Validators.required, Validators.email]),
      password:new FormControl('',[Validators.required, Validators.minLength(4)]),
      integrantes:new FormControl('',[Validators.required, Validators.pattern('^[0-9]+$')]),
      ninios:new FormControl('',[Validators.required]),
      mascota:new FormControl('',[Validators.required]),
      especificacion:new FormControl('',[Validators.required]),
      tipoVivienda:new FormControl('',[Validators.required]),
      ambientes:new FormControl('',[Validators.required]),
      patio:new FormControl('',[Validators.required]),
      transito: new FormControl('',[Validators.required]),
      startDate:new FormControl(''),
      endDate:new FormControl(''),
      size:new FormControl(''),
      especie:new FormControl(''),

    })

    

      this.formulario.get('transito')?.valueChanges.subscribe((valor)=> {
        if(valor === "true") {
          this.mostrarComponenteDisponibilidad = true;
        } else {
          this.mostrarComponenteDisponibilidad = false;
        }       
      });
      this.formulario.get('mascota')?.valueChanges.subscribe((valor)=> {
        if(valor === "true") {
          this.tieneMascota = true;
        } else {
          this.tieneMascota = false;
        }      
      });
  } 
  

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
  get ninios() { return this.formulario.get('ninios')}
  get mascota() {return this.formulario.get('mascota')}
  get especificaciones() {return this.formulario.get('especificaciones')}
  get tipoVivienda() {return this.formulario.get('tipoVivienda')}
  get ambientes() {return this.formulario.get('ambientes')}
  get patio() {return this.formulario.get('patio')}
  get transito() {return this.formulario.get('transito')}   
  get startDate() {return this.formulario.get('startDate')} 
  get endDate() {return this.formulario.get('endDate')} 
  get size() {return this.formulario.get('size')} 
  get especie() {return this.formulario.get('especie')}  
  
  ngOnInit():void{}
  
  submit(){
   
    if (this.formulario.valid) {
      const user: User = new User();
      user.dni = this.dni?.value;
      user.nombre = this.nombre?.value;
      user.apellido = this.apellido?.value;
      user.domicilio.calle = this.calle?.value;
      user.domicilio.numero = this.numero?.value;
      user.domicilio.piso = this.piso?.value;
      user.domicilio.departamento = this.departamento?.value;
      user.domicilio.codigoPostal = this.codigoPostal?.value;
      user.telefono = this.telefono?.value;
      user.email = this.email?.value;
      user.contrasenia = this.password?.value;
      user.datosVivienda.ambientes = this.ambientes?.value;
      user.datosVivienda.integrantes = this.integrantes?.value;
      user.datosVivienda.tipoVivienda = this.tipoVivienda?.value;
      user.datosVivienda.ninios = (this.ninios?.value === "true") ? true : false
      user.datosVivienda.mascota = (this.mascota?.value === "true") ? true : false
      user.datosVivienda.especificacion = this.especificaciones?.value;
      user.datosVivienda.patio = (this.patio?.value === "true") ? true : false
      user.disponibilidad.startDate = this.startDate?.value;
      user.disponibilidad.endDate = this.endDate?.value;
      user.disponibilidad.size = this.size?.value;
      user.disponibilidad.especie = this.especie?.value;

      if(this.transito?.value === "true"){
          user.tipo.push("TRANSITO");
      }

      this.userService.createUser(user).subscribe({
        next: (response) => {
          console.log(response)
          this.formulario.reset();
          this.router.navigateByUrl("/login")
        },
        error: err => alert(err)
      })         
  } else {
      this.formulario.markAllAsTouched();        
  }   

  //   // if (this.formulario.status)
  //   // alert("debe completar todos los campos")
  // else
  //   console.log(this.user)
  }
  

}