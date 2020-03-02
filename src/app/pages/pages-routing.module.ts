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
import { AuthGuard } from '../security/auth.guard';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'login', component: LoginComponent },
  {
    path: 'home', component: HomeComponent, canActivate: [AuthGuard], children: [
      { path: '', pathMatch: 'full', redirectTo: 'welcome', canActivate: [AuthGuard] },
      { path: 'welcome', component: WelcomeComponent, canActivate: [AuthGuard] },
      { path: 'pesquisadores', component: ConsultaPesquisadoresComponent, canActivate: [AuthGuard] },
      { path: 'cadastro-pesquisador', component: CadastroPesquisadorComponent, canActivate: [AuthGuard] },
      { path: 'gerador-pagina', component: GeradorPaginaComponent, canActivate: [AuthGuard] },
      { path: 'areas-pesquisa', component: ConsultaAreaPesquisaComponent, canActivate: [AuthGuard] },
      { path: 'cadastro-area-pesquisa', component: CadastroAreaPesquisaComponent, canActivate: [AuthGuard] },
      { path: 'grupos-pesquisa', component: ConsultaGrupoPesquisaComponent, canActivate: [AuthGuard] },
      { path: 'cadastro-grupo-pesquisa', component: CadastroGrupoPesquisaComponent, canActivate: [AuthGuard] },
      { path: 'consulta-categoria-links', component: ConsultaCategoriaLinksComponent, canActivate: [AuthGuard] },
      { path: 'cadastro-categoria-links', component: CadastroCategoriaLinksComponent, canActivate: [AuthGuard] },
      { path: 'consulta-links-uteis', component: ConsultaLinksComponent, canActivate: [AuthGuard] },
      { path: 'cadastro-link-util', component: CadastroLinkComponent, canActivate: [AuthGuard] },
      { path: 'consulta-questionarios', component: ConsultaQuestionarioComponent, canActivate: [AuthGuard] },
      { path: 'cadastro-questionario', component: CadastroQuestionarioComponent, canActivate: [AuthGuard] },
      { path: 'consulta-artigos', component: ConsultaArtigoComponent, canActivate: [AuthGuard] },
      { path: 'cadastro-artigo', component: CadastroArtigoComponent, canActivate: [AuthGuard] },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
