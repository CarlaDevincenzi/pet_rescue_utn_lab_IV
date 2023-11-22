import { Component } from '@angular/core';
import { SessionService } from 'src/app/sevices/session.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private session: SessionService){}

  userId = this.session.getUsuarioLogueadoId();
  userType = this.session.getTipoUsuarioLogueado(); 

  cerrarSesion(){
    this.session.logOut();    
  }

}
