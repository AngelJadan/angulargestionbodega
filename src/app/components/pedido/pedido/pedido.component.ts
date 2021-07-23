import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {

  public pedidos: any =[];
  usuario:string;
  constructor(private route: ActivatedRoute) {
    this.usuario = route.snapshot.params.nombre;
   }

  ngOnInit(): void {
  }

}
