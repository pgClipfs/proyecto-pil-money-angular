import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup , Validators} from '@angular/forms';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {
  form:FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.form= this.formBuilder.group(
      {
        password:['',[Validators.required, Validators.minLength(8)]],
        mail:['', [Validators.required, Validators.email]]   
      }
    )
   }

  ngOnInit(): void {
  }

  get Password()
  {
    return this.form.get("password");
  }

  get Mail()
  {
   return this.form.get("mail");
  }
  
}
