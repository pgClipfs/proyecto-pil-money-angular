import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(
        private authService: AuthService
      ) { }

      canActivate(
        route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot): Observable <boolean> {
         return this.authService.estaAutenticado.pipe(take (1),
         map((isLogged:boolean)=>isLogged));
      }
    }
     
  

