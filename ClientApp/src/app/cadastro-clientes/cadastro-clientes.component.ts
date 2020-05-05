import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../services/cliente.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-clientes',
  templateUrl: './cadastro-clientes.component.html',
  styleUrls: ['./cadastro-clientes.component.css']
})
export class CadastroClientesComponent implements OnInit {
  router: Router;

  constructor(public service: ClienteService, router: Router) {
    this.router = router;
  }

  ngOnInit(): void {
    this.resetForm();
  }

  resetForm(form?:NgForm){
    if(form != null){
      form.resetForm();
    }
    this.service.formData = {
      clienteID: 0,
      nome: '',
      cpf: '',
      email: '',
      telefone: '',
      endereco: ''
    }
  }

  onSubmit(form:NgForm){
    this.service.postCliente(form.value, 'cliente').subscribe(
      res => {
        this.resetForm();
        this.router.navigate(['', 'cadastro-concluido']);
      },
      err =>{
        console.log(err);
      }
    )
  }

}
