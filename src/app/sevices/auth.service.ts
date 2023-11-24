import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  
  constructor(private sessionService: SessionService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // Verifica si el usuario está autenticado
    if (this.sessionService.getUsuarioLogueadoId === null) {
      // Redirige al usuario a la página de inicio de sesión si no está autenticado
      return this.router.parseUrl('/home');
    }

    // Obtiene el tipo de usuario
    const tipoUsuario = this.sessionService.getTipoUsuarioLogueado();

    // Obtiene los roles permitidos para la ruta actual
    const rolesPermitidos = next.data && next.data['roles'] ? next.data['roles'] : [];

    if (tipoUsuario?.some(tipo => rolesPermitidos.includes(tipo))) {
      return true;
    } else {
      // Redirige al usuario al home si no tiene el tipo de usuario correcto
      return this.router.parseUrl('/home');
    }
  }
}
