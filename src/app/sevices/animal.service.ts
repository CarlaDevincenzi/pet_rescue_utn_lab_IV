import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environments } from 'src/environments/environments';
import { Animal } from '../models/animal';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  private apiUrl:string = `${environments.baseUrl}/animales`;
  
  constructor(private http: HttpClient) {}

  getAnimals(): Observable<Animal[]> {
    return this.http.get<Animal[]>(this.apiUrl);
  }

  getAnimalById(id: number): Observable<Animal> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Animal>(url);
  }
  
  createAnimal(animal: Animal): Observable<Animal> {
    return this.http.post<Animal>(this.apiUrl, animal);
  }

  updateAnimal(animal: Animal): Observable<Animal> {
  const url = `${this.apiUrl}/${animal.id}`;
  return this.http.put<Animal>(url, animal);
}

  deleteAnimal(id: number): Observable<Animal> {
  const url = `${this.apiUrl}/${id}`;
  return this.http.delete<Animal>(url);
}
}
