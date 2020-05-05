import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroClientesComponent } from './cadastro-clientes/cadastro-clientes.component';
import { InvestimentosComponent } from './investimentos/investimentos.component';
import { PlanosComponent } from './planos/planos.component';
import { CadastroConcluidoComponent } from './cadastro-concluido/cadastro-concluido.component';
import { AcessoNegadoComponent } from './acesso-negado/acesso-negado.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch:'full' },
  { path: 'planos', component: PlanosComponent },
  { path: 'investimentos', component: InvestimentosComponent },
  { path: 'cadastro-clientes', component: CadastroClientesComponent },
  { path: 'cadastro-concluido', component: CadastroConcluidoComponent },
  { path: 'acesso-negado', component: AcessoNegadoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
