import { Injectable } from '@angular/core';
import { Cliente } from './cliente.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  formData: Cliente
  readonly rootURL = "http://localhost:54038/api"

  constructor(private http: HttpClient) { }

  postCliente(formData:Cliente, route: string){
    return this.http.post(this.rootURL + '/' + route,formData);
  }

}
