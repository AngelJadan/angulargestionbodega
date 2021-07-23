import { Component, Injectable, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../../../services/usuario/usuario.service';


@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css']
})
@Injectable()
export class DatosComponent implements OnInit {

  public formu: FormGroup;

  public id:number=0;
  public nombre:string="";
  public password:string="";

  usuario:string;

  constructor(private formBuilder: FormBuilder, private route:ActivatedRoute,
     private UsuarioService: UsuarioService) { 
    this.usuario= route.snapshot.params.nombre;
    this.formu = this.formBuilder.group({});
    this.getUsuario();
  }

  ngOnInit(): void {
    console.log("id init",this.id);

    this.formu = this.formBuilder.group({
      id:[this.id,],
      nombre:[this.nombre],
      password:['',
      [
        Validators.required
      ]]
    });
  }

  getUsuario():void {
    console.log("Usuario: ",this.usuario);
    this.UsuarioService.getUsuario(this.usuario).subscribe((resp:any) => {
      console.log("res ", resp);
      this.id = resp.id;
      this.nombre = resp.nombre;

      console.log(this.id);
    });
  }
  update():any {
    let formulario = [];
    let id =this.id;
    let nombre = this.nombre;
    let password = "";
    
    console.log("updating");
    formulario = this.formu.value;
    
    this.UsuarioService.updateUsuario(this.formu.value)
    .subscribe( (resp: any) => {
      console.log(resp);
    });
  }

}
