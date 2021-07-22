import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movimientos',
  templateUrl: './movimientos.component.html',
  styleUrls: ['./movimientos.component.css']
})
export class MovimientosComponent implements OnInit {
  hoy= new Date();
  mostrarMovimientos: boolean=true;
  movimientos=[{operacion:"Extracción",monto:1500}, {operacion:"Depósito", monto:1520}];
  constructor() { }

  ngOnInit(): void {
  }

}
