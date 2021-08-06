import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup , Validators} from '@angular/forms';
import { Usuario, UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';
import {AuthService} from 'src/app/services/auth/auth.service'


@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {
  usuario: Usuario = new Usuario();
 [x: string]: any;
 //returnUrl: string;
  form:FormGroup;
  constructor(private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router) {
    this.form= this.formBuilder.group(
      {
        password:['',[Validators.required, Validators.minLength(8)]],
        mail:['', [Validators.required, Validators.email]]   
      }
    )
   }
  get Password()
  {
    return this.form.get("password");
  }
  get Mail()
  {
   return this.form.get("mail");
  }
  get PasswordValid()
  {
    return this.Password?.touched && !this.Password?.valid;
  }
  get MailValid()
  {
    return this.Mail?.touched && !this.Mail?.valid;
  }   

  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
  }
  
  onEnviar(event: Event, usuario:Usuario): void {
    
    event.preventDefault;
    this.authService.login(this.usuario)
      .subscribe(
        data => {
        console.log("DATA"+ JSON.stringify( data));   
        this.router.navigate(['/home/movimientos']);
      },
        error => {
         this.error = error;
        }
      );
  }

}