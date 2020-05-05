import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroClientesComponent } from './cadastro-clientes/cadastro-clientes.component';
import { InvestimentosComponent } from './investimentos/investimentos.component';
import { PlanosComponent } from './planos/planos.component';
import { CadastroConcluidoComponent } from './cadastro-concluido/cadastro-concluido.component';
import { AcessoNegadoComponent } from './acesso-negado/acesso-negado.component';
import { HomeComponent } from './home/home.component';
import { PainelClienteComponent } from './painel-cliente/painel-cliente.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch:'full' },
  { path: 'home', component: HomeComponent },
  { path: 'planos', component: PlanosComponent },
  { path: 'investimentos', component: InvestimentosComponent },
  { path: 'cadastro-clientes', component: CadastroClientesComponent },
  { path: 'cadastro-concluido', component: CadastroConcluidoComponent },
  { path: 'acesso-negado', component: AcessoNegadoComponent },
  { path: 'painel-cliente', component: PainelClienteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
