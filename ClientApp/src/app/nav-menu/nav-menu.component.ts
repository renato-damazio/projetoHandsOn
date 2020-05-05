import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../services/cliente.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

  router: Router;

  constructor(public service: ClienteService, public http: HttpClient, router: Router) {
    this.router = router;
  }

  ngOnInit(): void {

  }

  cpf: string;

  readonly rootURL = "http://localhost:54038/api"

  onSearchCliente(form: NgForm) {

    return this.http.post(this.rootURL + '/cliente/search', JSON.parse(this.cpf)).subscribe(
      res => {
        this.router.navigate(['', 'painel-cliente']);
      },
      err => {
        console.log(err);
        this.router.navigate(['', 'acesso-negado']);
      }
    )
  }

  headers = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8'
    })
  }

}
