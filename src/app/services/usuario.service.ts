import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';


 
export class Usuario
{
  nombre:string="";
  apellido:string="";
  dni:string="";
  fechaNacimiento:string="";
  password:string="";
  email:string="";
  id:number=0;
  //A modo de ejemplo se deja así pero lo ideal es crear propiedades para acceder a los atributos.
}

@Injectable({
  providedIn: 'root'
})

  //A modo de ejemplo se deja así pero lo ideal es crear propiedades para acceder a los atributos.
 
 
  export class UsuarioService {
    url="https://reqres.in/api/users/1";
   
    constructor(private http:HttpClient,  
      private cookies: CookieService) {
      console.log("Servicio Usuarios está corriendo");
     }
     onCrearUsuario(usuario:Usuario):Observable<Usuario>{
      return this.http.post<Usuario>(this.url, usuario);
    }

    onEnviar(usuario:Usuario):Observable<Usuario>{
      return this.http.post<Usuario>(this.url, usuario);
    }


  

   // setToken(token: string) {
  //    this.cookies.set("token", token);
  //  }
   // getToken() {
   //   return this.cookies.get("token");
   // }
   // getUser() {
    // return this.http.get("https://reqres.in/api/users/2");
   // }
  //  getUserLogged() {
   //  const token = this.getToken();
      
  //  }
  }
    

