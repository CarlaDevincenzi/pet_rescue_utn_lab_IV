import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/sevices/user.service';

@Component({
  selector: 'app-usuario-view',
  templateUrl: './usuario-view.component.html',
  styleUrls: ['./usuario-view.component.css']
})
export class UsuarioViewComponent {
  usuario: User | null = new User();

  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit() {
    let userId = Number(this.route.snapshot.paramMap.get('id'));
    
    this.userService.getUserById(userId).subscribe({
      next: response => {
        this.usuario = response
      },
      error: (errorData )=> console.log(errorData)     
      
    })
      
  }
}
