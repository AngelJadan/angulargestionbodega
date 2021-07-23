import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ClienteService {

  url:string ="http://localhost:8080";
  constructor(private http: HttpClient) { }

  public getCliente(cedula:string){
    return this.http.get(this.url+'/gestionbodega/rest/cliente/get_cliente_cedula?cedula='+cedula);
  }
  public postGenUsuarioCliente(cedula: string){
    console.log("cedula ",cedula);
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'})
    }
    //return this.http.post('', cedula);
    return this.http.post(this.url+'/gestionbodega/rest/cliente/sign_in_cust_to_id', cedula,httpOptions);
  }
}
