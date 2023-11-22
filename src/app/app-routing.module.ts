import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { UserHomePageComponent } from './pages/user-home-page/user-home-page.component';
import { AdminHomePageComponent } from './pages/admin-home-page/admin-home-page.component';
import { RegistrationPageComponent } from './pages/registration-page/registration-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { UserModifyPageComponent } from './pages/user-modify-page/user-modify-page.component';
import { AnimalRegistrationPageComponent } from './pages/animal-registration-page/animal-registration-page.component';

const routes: Routes = [
  {path:'user-register', component:RegistrationPageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'user-home', component: UserHomePageComponent},
  {path: 'admin-home', component: AdminHomePageComponent},
  {path: 'home', component: HomePageComponent},
  {path: 'user-modify', component: UserModifyPageComponent},
  {path: 'animal-registration', component: AnimalRegistrationPageComponent},
  {path: '**', component: HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
