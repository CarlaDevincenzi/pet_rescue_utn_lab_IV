import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserRegistrationFormComponent } from './components/user-registration-form/user-registration-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormFieldAppearanceComponent } from './components/shared/form-field-appearance/form-field-appearance.component';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { FormFieldPasswordViewComponent } from './components/shared/form-field-password-view/form-field-password-view.component';
import { LoginComponent } from './components/login/login.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import {HttpClientModule}  from '@angular/common/http';
import { UserHomePageComponent } from './pages/user-home-page/user-home-page.component';
import { AdminHomePageComponent } from './pages/admin-home-page/admin-home-page.component';
import { AnimalRegistrationFormComponent } from './components/animal-registration-form/animal-registration-form.component';
import { RegistrationPageComponent } from './pages/registration-page/registration-page.component';
import { CardComponent } from './components/card/card.component';
import { ListAnimalComponent } from './components/list-animal/list-animal.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HeaderComponent } from './components/shared/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    UserRegistrationFormComponent,
    FormFieldAppearanceComponent,
    FormFieldPasswordViewComponent,
    LoginComponent,
    LoginPageComponent,
    UserHomePageComponent,
    AdminHomePageComponent,
    AnimalRegistrationFormComponent,
    RegistrationPageComponent,    
    CardComponent,
    ListAnimalComponent,
    HomePageComponent,
    NavbarComponent,
    HeaderComponent       
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
