import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  hide: boolean = true;

  loginForm = this.formBuilder.group({
    dni: ['', [Validators.required, Validators.pattern('^[0-9]+$'), Validators.maxLength(8), Validators.minLength(7)]],
    password: ['', [Validators.required]]
  })

  get password() { return this.loginForm.controls.password; }
  get dni() { return this.loginForm.controls.dni; }

  constructor(private formBuilder: FormBuilder, private router: Router){ }

  onSubmit(){
    if(this.loginForm.valid){
      console.log("llamar al servicio de login");
      //this.router.navigateByUrl("/inicio"); // se comenta por falta de implementacion
    }else {
      alert("Error al ingresar los datos");
    }
  }
}
