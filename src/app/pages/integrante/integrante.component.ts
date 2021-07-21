import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params} from '@angular/router';

@Component({
  selector: 'app-integrante',
  templateUrl: './integrante.component.html',
  styleUrls: ['./integrante.component.css']
})
export class IntegranteComponent implements OnInit {

  integrante:string ="";
  integranteId:number=0;

  constructor(private rutaActiva: ActivatedRoute) { 
   
  }

  ngOnInit(): void {
   
      this.rutaActiva.params.subscribe(
        (params: Params) => {
          this.integrante = params.integrante;
         
        }
      );

      if (this.integrante =="federico")
      {this.integranteId=1;}

      if (this.integrante =="diana")
      {this.integranteId=2;}

      if (this.integrante =="joaquin")
      {this.integranteId=3;}
   
  }

}
