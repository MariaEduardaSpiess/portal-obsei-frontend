import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsultaPesquisadoresComponent } from './pesquisadores/consulta-pesquisadores/consulta-pesquisadores.component';
import { CadastroPesquisadorComponent } from './pesquisadores/cadastro-pesquisadores/cadastro-pesquisador.component';
import { HomeComponent } from './home/home.component';
import { GeradorPaginaComponent } from './gerador-pagina/gerador-pagina.component';
import { ConsultaGrupoPesquisaComponent } from './grupo-pesquisa/consulta-grupo-pesquisa/consulta-grupo-pesquisa.component';
import { ConsultaLinksComponent } from './link-util/consulta-link/consulta-link.component';
import { CadastroLinkComponent } from './link-util/cadastro-link/cadastro-link.component';
import { ConsultaAreaPesquisaComponent } from './area-pesquisa/consulta-area-pesquisa/consulta-area-pesquisa.component';
import { CadastroAreaPesquisaComponent } from './area-pesquisa/cadastro-area-pesquisa/cadastro-area-pesquisa.component';
import { ConsultaCategoriaLinksComponent } from './categoria-link/consulta-categoria-links/consulta-categoria-links.component';
import { CadastroGrupoPesquisaComponent } from './grupo-pesquisa/cadastro-grupo-pesquisa/cadastro-grupo-pesquisa.component';
import { CadastroCategoriaLinksComponent } from './categoria-link/cadastro-categoria-links/cadastro-categoria-links.component';
import { ConsultaQuestionarioComponent } from './questionario/consulta-questionario/consulta-questionario.component';
import { CadastroQuestionarioComponent } from './questionario/cadastro-questionario/cadastro-questionario.component';
import { ConsultaArtigoComponent } from './artigo/consulta-artigo/consulta-artigo.component';
import { CadastroArtigoComponent } from './artigo/cadastro-artigo/cadastro-artigo.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomeComponent },
  { path: 'pesquisadores', component: ConsultaPesquisadoresComponent },
  { path: 'cadastro-pesquisador', component: CadastroPesquisadorComponent },
  { path: 'gerador-pagina', component: GeradorPaginaComponent },
  { path: 'areas-pesquisa', component: ConsultaAreaPesquisaComponent },
  { path: 'cadastro-area-pesquisa', component: CadastroAreaPesquisaComponent },
  { path: 'grupos-pesquisa', component: ConsultaGrupoPesquisaComponent },
  { path: 'cadastro-grupo-pesquisa', component: CadastroGrupoPesquisaComponent },
  { path: 'consulta-categoria-links', component: ConsultaCategoriaLinksComponent },
  { path: 'cadastro-categoria-links', component: CadastroCategoriaLinksComponent },
  { path: 'consulta-links-uteis', component: ConsultaLinksComponent },
  { path: 'cadastro-link-util', component: CadastroLinkComponent },
  { path: 'consulta-questionarios', component: ConsultaQuestionarioComponent },
  { path: 'cadastro-questionario', component: CadastroQuestionarioComponent },
  { path: 'consulta-artigos', component: ConsultaArtigoComponent },
  { path: 'cadastro-artigo', component: CadastroArtigoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
