import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsultaPesquisadoresComponent } from './pesquisadores/consulta-pesquisadores/consulta-pesquisadores.component';
import { CadastroPesquisadorComponent } from './pesquisadores/cadastro-pesquisadores/cadastro-pesquisador.component';
import { HomeComponent } from './home/home.component';
import { GeradorPaginaComponent } from './gerador-pagina/gerador-pagina.component';
import { AreaPesquisaComponent } from './area-pesquisa/area-pesquisa.component';
import { ConsultaGrupoPesquisaComponent } from './grupo-pesquisa/consulta-grupo-pesquisa/consulta-grupo-pesquisa.component';
import { CadastroGrupoPesquisaComponent } from './grupo-pesquisa/cadastro-grupo-pesquisa/cadastro-grupo-pesquisa.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomeComponent },
  { path: 'pesquisadores', component: ConsultaPesquisadoresComponent },
  { path: 'cadastro-pesquisador', component: CadastroPesquisadorComponent },
  { path: 'gerador-pagina', component: GeradorPaginaComponent },
  { path: 'areas-pesquisa', component: AreaPesquisaComponent },
  { path: 'grupos-pesquisa', component: ConsultaGrupoPesquisaComponent },
  { path: 'cadastro-grupo-pesquisa', component: CadastroGrupoPesquisaComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
