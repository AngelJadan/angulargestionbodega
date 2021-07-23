import { ThrowStmt } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ClienteService } from '../../services/cliente/cliente.service';
import { UsuarioService } from '../../services/usuario/usuario.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  public form: FormGroup;
  public cliente: any = [];
  public nombre: string = "";
  public apellido: string = "";
  public cedula: string = "";
  public correo: string = "";
  public direccion: string = "";
  public sms: string = "";
  public estado:string = "";

  usuario:string;


  constructor(private formBuilder: FormBuilder, private ClienteService: ClienteService,
    private route: ActivatedRoute,private UsuarioService:UsuarioService) {
    this.form = this.formBuilder.group({});
    this.usuario = route.snapshot.params.nombre;
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      cedula: ['',
        [
          Validators.required
        ]],
    });
  }

  buscarCliente(): any {
    let formulario = [];
    let cedula = "";

    formulario = this.form.value;
    cedula = formulario.cedula;
    console.log("Cedula ", cedula);

    this.ClienteService.getCliente(cedula)
      .subscribe((resp: any) => {
        console.log("respuesta: ", resp);
        this.cliente = resp;
        this.cedula = resp.cedula;
        this.nombre = resp.nombre;
        this.apellido = resp.apellido;
        this.correo = resp.correo;
        this.direccion = resp.direccion;
        this.estado = resp.estado;
        console.log("Estado: ", this.estado);

        console.log("nombre: ", this.nombre);
        this.sms = "";
        this.buscarUsuario();
        if (resp.id == 0) {
          this.sms = "Cliente no encontrado";
        }
      });
  }

  buscarUsuario():any{
    this.UsuarioService.getUsuario(this.correo)
    .subscribe((resp: any) => {
      console.log("Usuario",resp);
    })
  }

  generarUsurioCliente(): any {
    console.log("cedula: ", this.cedula);
    try {
      this.ClienteService.postGenUsuarioCliente(this.cedula)
        .subscribe((resp: any) => {
          console.log("resp ", resp);
          this.sms = resp.mensaje;
        });
    } catch (error) {
      this.sms = "Ya existe un usuario para este cliente";
    }
  }

  anular(): any {
    console.log("");
  }

}
