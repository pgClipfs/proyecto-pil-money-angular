import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  [x: string]: any;
  estaAutenticado:boolean=false;
  constructor(private authService: AuthService,  private router: Router) {
   
   }
 
  ngOnInit(): void {
   this.authService.estaAutenticado.subscribe(res=>( this.estaAutenticado=res));
   
   
  }
  
  onCerrarSesion(){
    this.authService.logout();
    this.estaAutenticado=false;
    this.router.navigate(['/servicios']);
  }
}
