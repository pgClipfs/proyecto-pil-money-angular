import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

export class Usuario
{
  nombre:string="";
  apellido:string="";
  dni:string="";
  fechaNacimiento:string="";
  password:string="";
  email:string="";
  id:number=0;
  token?: string;
  //A modo de ejemplo se deja así pero lo ideal es crear propiedades para acceder a los atributos.
}

@Injectable({
  providedIn: 'root'
})

  //A modo de ejemplo se deja así pero lo ideal es crear propiedades para acceder a los atributos.
 
 
  export class UsuarioService {
    url="https://reqres.in/api/users/1";

    constructor(private http:HttpClient) {
      console.log("Servicio Usuarios está corriendo");
     }
  
    crearUsuario(usuario:Usuario):Observable<Usuario>{
      return this.http.post<Usuario>(this.url, usuario);
    }
  }
    

