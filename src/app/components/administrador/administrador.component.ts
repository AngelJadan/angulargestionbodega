import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {

  nombre: string;

  constructor(private route: ActivatedRoute) { 
    this.nombre = route.snapshot.params.nombre;
  }

  ngOnInit(): void {
  }

}
