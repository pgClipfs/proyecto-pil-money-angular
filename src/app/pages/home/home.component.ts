import { Component, OnInit } from '@angular/core';
import { UsuarioService,  Usuario } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  [x: string]: any;

  constructor(private usuarioService: UsuarioService,
              ) { }

  ngOnInit(): void {
    
  }

  

}
