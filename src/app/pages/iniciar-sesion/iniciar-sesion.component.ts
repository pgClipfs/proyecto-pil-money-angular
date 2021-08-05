import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup , Validators} from '@angular/forms';
import { Usuario, UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service'

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {

 [x: string]: any;
 //returnUrl: string;
  form:FormGroup;
  constructor(private formBuilder: FormBuilder,
    private usuarioService: UsuarioService,
    private authenticationService: AuthenticationService,
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
  onSubmit(): void {
    this.authenticationService.login(this.form.get("mail")?.value, this.form.get("password")?.value)
      .subscribe(
        data => {
        this.router.navigate([this.returnUrl]);
      // this.router.navigate(['iniciar-sesion'])
    console.log('paso');   
    },
        error => {
         this.error = error;
        }
      );
  }
}