import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url:string;

  constructor(private http: HttpClient) {
    //this.url ="http://localhost:8080";
    this.url ="http://18.191.0.102:8080";
  }

  public getUsuario(usuario:string){
    return this.http.get(this.url+"/gestionbodega/rest/cliente/get_usuario?usuario="+usuario);
  }

  public updateUsuario(body: string){
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'})
    }    
    return this.http.post(this.url+"/gestionbodega/rest/cliente", body, httpOptions);
  }
}
