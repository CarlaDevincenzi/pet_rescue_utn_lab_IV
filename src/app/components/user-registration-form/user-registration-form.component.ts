import { Component, OnInit,Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup,Validators} from '@angular/forms';
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
  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService ){
    this.formulario = this.formBuilder.group({
      dni: new FormControl('',
      [Validators.required, Validators.minLength(6), CustomValidator.asyncDniExists(this.userService)]),
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
      patio:new FormControl(''),
      transito: new FormControl('')
    })

    this.formulario.get('dni')?.valueChanges.pipe(debounceTime(300)) // Ajusta el tiempo de espera según tus necesidades
    .subscribe(() => {
      this.formulario.get('dni')?.updateValueAndValidity();
    });

      this.formulario.get('transito')?.valueChanges.subscribe((valor)=> {
        if(valor) {
          this.mostrarComponenteDisponibilidad = true;
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
  get niños() { return this.formulario.get('niños')}
  get mascota() {return this.formulario.get('mascota')}
  get especificaciones() {return this.formulario.get('especificaciones')}
  get tipoVivienda() {return this.formulario.get('tipoVivienda')}
  get ambientes() {return this.formulario.get('ambientes')}
  get patio() {return this.formulario.get('patio')}
  get transito() {return this.formulario.get('transito')}    
  
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
      user.datosVivienda.mascota = this.mascota?.value;
      user.datosVivienda.ninios = this.niños?.value;
      user.datosVivienda.especificacion = this.especificaciones?.value;
      user.datosVivienda.patio = this.patio?.value;
      

      this.userService.createUser(user).subscribe({
        next: (response) => {
          console.log(response)
          this.formulario.reset();
          // this.router.navigateByUrl("") Implementar a donde va
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