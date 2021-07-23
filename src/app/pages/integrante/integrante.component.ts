import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params} from '@angular/router';

@Component({
  selector: 'app-integrante',
  templateUrl: './integrante.component.html',
  styleUrls: ['./integrante.component.css']
})
export class IntegranteComponent implements OnInit {

  id:number=0;

  constructor(private rutaActiva: ActivatedRoute) { 
   
  }

  ngOnInit(): void {
   
      this.rutaActiva.params.subscribe(
        (params: Params) => {
          this.id = params.id;
         
        }
      );

      
  }

}
