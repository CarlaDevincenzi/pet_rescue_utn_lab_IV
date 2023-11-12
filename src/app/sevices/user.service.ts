import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { environments } from 'src/environments/environments';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl:string = `${environments.baseUrl}/usuarios`;
  
  constructor(private http: HttpClient) {}

    getUsers(): Observable<User[]> {
      return this.http.get<User[]>(this.apiUrl);
    }

    getUserById(id: number): Observable<User> {
      const url = `${this.apiUrl}/${id}`;
      return this.http.get<User>(url);
    }
    
    createUser(user: User): Observable<User> {
      return this.http.post<User>(this.apiUrl, user);
    }

    updateUser(user: User): Observable<User> {
    const url = `${this.apiUrl}/${user.idUsuario}`;
    return this.http.put<User>(url, user);
  }

    deleteUser(id: number): Observable<User> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<User>(url);
  }

}
