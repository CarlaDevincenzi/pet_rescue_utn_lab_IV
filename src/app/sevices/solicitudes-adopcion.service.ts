import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environments } from 'src/environments/environments';
import { SolicitudAdopcion } from '../models/solicitudAdopcion';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SolicitudesAdopcionService {


  private apiUrl:string = `${environments.baseUrl}/solicitudes-adopcion`;
 
  constructor(private http: HttpClient) {}


    getSolicitudes(): Observable<SolicitudAdopcion[]> {
      return this.http.get<SolicitudAdopcion[]>(this.apiUrl);
    }


    getSolicitudById(id: number): Observable<SolicitudAdopcion> {
      const url = `${this.apiUrl}/${id}`;
      return this.http.get<SolicitudAdopcion>(url);
    }
   
    createSolicitud(solicitud: SolicitudAdopcion): Observable<SolicitudAdopcion> {
      return this.http.post<SolicitudAdopcion>(this.apiUrl, solicitud);
    }


    updateSolicitud(solicitud: SolicitudAdopcion): Observable<SolicitudAdopcion> {
    const url = `${this.apiUrl}/${solicitud.id}`;
    return this.http.put<SolicitudAdopcion>(url, solicitud);
  }
   
}
