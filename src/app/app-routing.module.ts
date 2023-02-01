
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DadosDaPropostaComponent } from './components/pages/dados-da-proposta/dados-da-proposta.component';
import { DevolutivaCnpjComponent } from './components/pages/devolutiva-cnpj/devolutiva-cnpj.component';
import { DevolutivaComponent } from './components/pages/devolutiva/devolutiva.component';
import { DadosDeRelatorioComponent } from './components/pages/dados-de-relatorio/dados-de-relatorio.component';


const routes: Routes = [
  {path: '', component: DevolutivaComponent },
  {path: 'devolutiva', component: DevolutivaComponent },
  { path: 'dados-da-proposta', component: DadosDaPropostaComponent },
  { path: 'dados-de-relatorio', component: DadosDeRelatorioComponent  }]




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
