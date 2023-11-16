import { AbstractControl, AsyncValidatorFn, ValidationErrors } from "@angular/forms";
import { UserService } from "../sevices/user.service";
import { Observable, map, of } from "rxjs";

export class CustomValidator{

    static asyncDniExists(userService: UserService) {
        return (control: AbstractControl): Observable<ValidationErrors | null> => {
          const dni = control.value;
    
          // Si el campo está vacío, consideramos la validación como exitosa
          if (!dni) {
            return of(null);
          }
    
          // Verificar la existencia del DNI llamando al servicio de usuarios
          return userService.getUsers().pipe(
            map((users) => {
              const dniExists = users.some((user) => user.dni === Number(dni));
    
              return dniExists ? { dniExists: true } : null;
            })
          );
        };
      }    
}


