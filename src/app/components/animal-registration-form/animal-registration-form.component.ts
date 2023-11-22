import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Animal } from 'src/app/models/animal';
import { AnimalService } from 'src/app/sevices/animal.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-animal-registration-form',
  templateUrl: './animal-registration-form.component.html',
  styleUrls: ['./animal-registration-form.component.css']
})
export class AnimalRegistrationFormComponent {

  constructor(private fb: FormBuilder, private animalService: AnimalService, private router: Router){}

  compatibilidades: string[] = ['NIÑOS', 'PERROS', 'GATOS'];
  compatibilidadesSeleccionadas: string[] = []; // Array para almacenar las compatibilidades seleccionadas

  imagenes:string[] = [];
  urlImagen:string = ''; 
  
  animalForm: FormGroup = this.fb.group({
    estado: ['', Validators.required],
    nombre: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
    especie: ['', Validators.required],
    sexo: ['', Validators.required],    
    size: ['', Validators.required],
    edad: ['', [Validators.required, Validators.min(0)]],
    compatibilidad: [''],
    descripcion: ['', Validators.required],
    imagen: ['', [Validators.required, Validators.pattern(/\.(jpg|jpeg|png)$/)]]    
  });
  
  get estado() { return this.animalForm.get('estado') }
  get nombre() { return this.animalForm.get('nombre') }
  get especie() { return this.animalForm.get('especie') }
  get sexo() { return this.animalForm.get('sexo') }
  get size() { return this.animalForm.get('size') }
  get edad() { return this.animalForm.get('edad') }
  get compatibilidad() { return this.animalForm.get('compatibilidad') }
  get descripcion() { return this.animalForm.get('descripcion') }
  get imagen() { return this.animalForm.get('imagen') }
  
  enviar(){
    if (this.animalForm.valid) {
        const animal: Animal = new Animal();
        animal.estado = this.estado?.value;
        animal.nombre = this.nombre?.value;
        animal.especie = this.especie?.value;
        animal.sexo = this.sexo?.value;
        animal.tamanio = this.size?.value;
        animal.edad = this.edad?.value;
        animal.compatibilidad = this.compatibilidadesSeleccionadas;
        animal.descripcion = this.descripcion?.value;
        animal.imagenes = this.imagenes;

        this.animalService.createAnimal(animal).subscribe({
          next: (response) => {
            console.log(response)            
            Swal.fire({
              title: '¡MASCOTA CARGADA CON EXITO!',              
              icon: 'success',
              confirmButtonText: 'OK',
            })
            this.router.navigateByUrl("/admin-home");
          },
          error: err => alert(err)
        })         
    } else {
        this.animalForm.markAllAsTouched();        
    }   
  }

  onCheckboxChange(event: any) {
    const compatibilidad = event.target.value;

    // Verifica si la compatibilidad ya está en el array
    if (event.target.checked) {
      if (!this.compatibilidadesSeleccionadas.includes(compatibilidad)) {
        this.compatibilidadesSeleccionadas.push(compatibilidad);
      }
    } else {
      // Elimina la compatibilidad del array si se desmarca
      const index = this.compatibilidadesSeleccionadas.indexOf(compatibilidad);
      if (index !== -1) {
        this.compatibilidadesSeleccionadas.splice(index, 1);
      }
    }
    console.log('Compatibilidades seleccionadas:', this.compatibilidadesSeleccionadas);    
  }

  addImg(){
      this.urlImagen = this.imagen?.value.replace("C:\\fakepath\\", "../../../assets/img/");
      this.imagenes.push(this.urlImagen);
      console.log(this.imagenes);
  }

  
}
