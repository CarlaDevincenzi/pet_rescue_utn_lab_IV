import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/sevices/user.service';

@Component({
  selector: 'app-list-usuarios',
  templateUrl: './list-usuarios.component.html',
  styleUrls: ['./list-usuarios.component.css']
})
export class ListUsuariosComponent implements OnInit{
  
  constructor(private userService: UserService){}
  listadoUsuarios! : Array<User>;
  
  ngOnInit(): void {
    this.userService.getUsers().subscribe({
      next: (response) => {
				this.listadoUsuarios = response.filter( user => user.tipo.includes('TRANSITO') )
			},
      error: (errorData) => {
        console.error(errorData);
        alert(errorData);
      }
    })
  }

  


}
