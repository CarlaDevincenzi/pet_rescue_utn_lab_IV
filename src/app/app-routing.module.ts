import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { UserHomePageComponent } from './pages/user-home-page/user-home-page.component';
import { AdminHomePageComponent } from './pages/admin-home-page/admin-home-page.component';
import { RegistrationPageComponent } from './pages/registration-page/registration-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AnimalRegistrationPageComponent } from './pages/animal-registration-page/animal-registration-page.component';
import { ListSolicitudesPageComponent } from './pages/list-solicitudes-page/list-solicitudes-page.component';
import { UserSolicitudesComponent } from './components/user-solicitudes/user-solicitudes.component';
import { AuthGuard } from './sevices/auth.service';
import { ListUsuariosComponent } from './components/list-usuarios/list-usuarios.component';
import { UsuarioViewComponent } from './components/usuario-view/usuario-view.component';
import { AdminListAnimalSinTransitoPageComponent } from './pages/admin-list-animal-sin-transito-page/admin-list-animal-sin-transito-page.component';

const routes: Routes = [
  {path:'user-register', component:RegistrationPageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'user-home', component: UserHomePageComponent, canActivate: [AuthGuard], data: { roles: ['TRANSITO', 'ADOPTANTE', ''] } },
  {path: 'admin-home', component: AdminHomePageComponent, canActivate: [AuthGuard], data: { roles: ['ADMIN']}},
  {path: 'home', component: HomePageComponent},
  {path: 'user-solicitudes', component: UserSolicitudesComponent, canActivate: [AuthGuard], data: { roles: ['TRANSITO', 'ADOPTANTE', ''] }},
  {path: 'animal-registration', component: AnimalRegistrationPageComponent, canActivate: [AuthGuard], data: { roles: ['ADMIN']}},
  {path: 'list-solicitudes', component: ListSolicitudesPageComponent, canActivate: [AuthGuard], data: { roles: ['ADMIN']}},
  {path: 'admin-listar-usuarios-transito', component: ListUsuariosComponent, canActivate: [AuthGuard], data: { roles: ['ADMIN']} },
  {path: 'ver-info/:id', component: UsuarioViewComponent, canActivate: [AuthGuard], data: { roles: ['ADMIN']} },
  {path: 'animales-sin-transito', component: AdminListAnimalSinTransitoPageComponent, canActivate: [AuthGuard], data: { roles: ['ADMIN']} },
  {path: '**', component: HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
