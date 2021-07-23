import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class WsJeeServiceService {
  constructor(private http: HttpClient ) { }

  public get(){
    return this.http.get('');
  }
  public post(url: string, body: string){

    console.log("Body",body);
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'})
    }
    console.log(httpOptions);
    return this.http.post(url, body, httpOptions);
  }
}
