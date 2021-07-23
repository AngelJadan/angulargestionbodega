import { Component, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router} from '@angular/router'

import { WsJeeServiceService } from './../../../services/ws-jee-service.service';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
@Injectable()
export class UsuarioComponent implements OnInit {

  id:number;
  tipo:string;
  nombre:string;
  password:string;

  public formLogin: FormGroup;
  
  constructor(private formBuilder: FormBuilder,private route: ActivatedRoute, private router: Router
    ,private WsJeeServiceService: WsJeeServiceService) {
    this.id = route.snapshot.params.id;
    this.tipo = route.snapshot.params.tipo;
    this.nombre = route.snapshot.params.nombre;
    this.password = route.snapshot.params.password;
    this.formLogin = this.formBuilder.group({});
  }

  ngOnInit(): void {
    
    this.formLogin = this.formBuilder.group({
      nombre:['',
      [
        Validators.required
      ]],
      password:['',
      [
        Validators.required
      ]
    ]
    });
  }
  acceder ():any {
    let formulario = [];
    let nomb = "";
    let password = "";

    console.log("corriendo",this.formLogin.value);
    formulario = this.formLogin.value;
    nomb = formulario.nombre;
    password = formulario.password;

    console.log(nomb, password);
    
    
    //this.WsJeeServiceService.post("http://18.191.0.102:8080/gestionbodega/rest/usuario/login",
    this.WsJeeServiceService.post("http://localhost:8080/gestionbodega/rest/usuario/login",
      this.formLogin.value)
      .subscribe((res: any) => {
        console.log("dato: ",res);
        console.log("codigo: ", res.codigo);
        if(res.codigo=="200" && res.mensaje=="cliente"){
          console.log("Login exitoso!");
          this.router.navigate(["/pedido/"+nomb+"/"]);
        }
        if(res.codigo=="200" && res.mensaje=="administrador"){
          console.log("Administrador: ",res.mensaje);
          this.router.navigate(["/administrador/"+nomb]);
        }
        else{
          console.log(res.mensaje);
          this.nombre=res.mensaje;
        }
      });

    //Para reedirigir la pagina
    //this.router.navigate(["/pedido/"+nombre+"/"]);

  }

}
