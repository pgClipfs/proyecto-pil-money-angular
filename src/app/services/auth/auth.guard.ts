import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(
        private router: Router,
        private authService: AuthService
      ) { }

      canActivate(
        route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot): boolean {
        const currentUser = this.authService.usuarioAutenticado;
        console.log("auth guards: "+ JSON.stringify(currentUser)); 
        if (currentUser && JSON.stringify(currentUser)!='{}') {
          return true;
        } 
        else
        { 
          return false;
        }
      }
    }
     
  

