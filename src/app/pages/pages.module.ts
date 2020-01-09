import { NgModule } from '@angular/core';
import { PagesRoutingModule } from './pages-routing.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { CommonModule } from '@angular/common';
import { PesquisadoresService } from './pesquisadores/pesquisadores.service';
import { ConsultaPesquisadoresComponent } from './pesquisadores/consulta-pesquisadores/consulta-pesquisadores.component';
import { CadastroPesquisadorComponent } from './pesquisadores/cadastro-pesquisadores/cadastro-pesquisador.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UtilsService } from '../utils/utils.service';
import { GeradorPaginaComponent } from './gerador-pagina/gerador-pagina.component';
import { GeradorPaginaService } from './gerador-pagina/gerador-pagina.service';
import { AreaPesquisaService } from './area-pesquisa/area-pesquisa.service';
import { CadastroGrupoPesquisaComponent } from './grupo-pesquisa/cadastro-grupo-pesquisa/cadastro-grupo-pesquisa.component';
import { ConsultaGrupoPesquisaComponent } from './grupo-pesquisa/consulta-grupo-pesquisa/consulta-grupo-pesquisa.component';
import { GrupoPesquisaService } from './grupo-pesquisa/grupo-pesquisa.service';
import { CategoriaLinkService } from './categoria-link/categoria-link.service';
import { LinkUtilService } from './link-util/link-util.service';
import { CadastroLinkComponent } from './link-util/cadastro-link/cadastro-link.component';
import { ConsultaLinksComponent } from './link-util/consulta-link/consulta-link.component';
import { ConsultaAreaPesquisaComponent } from './area-pesquisa/consulta-area-pesquisa/consulta-area-pesquisa.component';
import { CadastroAreaPesquisaComponent } from './area-pesquisa/cadastro-area-pesquisa/cadastro-area-pesquisa.component';
import { ConsultaCategoriaLinksComponent } from './categoria-link/consulta-categoria-links/consulta-categoria-links.component';
import { CadastroCategoriaLinksComponent } from './categoria-link/cadastro-categoria-links/cadastro-categoria-links.component';
import { ConsultaQuestionarioComponent } from './questionario/consulta-questionario/consulta-questionario.component';
import { CadastroQuestionarioComponent } from './questionario/cadastro-questionario/cadastro-questionario.component';
import { QuestionarioService } from './questionario/questionario.service';
import { ConsultaArtigoComponent } from './artigo/consulta-artigo/consulta-artigo.component';
import { CadastroArtigoComponent } from './artigo/cadastro-artigo/cadastro-artigo.component';
import { ArtigoService } from './artigo/artigo.service';

@NgModule({
    imports: [PagesRoutingModule, NgZorroAntdModule, CommonModule, ReactiveFormsModule, FormsModule],
    exports: [],
    declarations: [
        HomeComponent,
        GeradorPaginaComponent,
        ConsultaPesquisadoresComponent,
        CadastroPesquisadorComponent,
        ConsultaAreaPesquisaComponent,
        CadastroAreaPesquisaComponent,
        ConsultaGrupoPesquisaComponent,
        CadastroGrupoPesquisaComponent,
        ConsultaCategoriaLinksComponent,
        CadastroCategoriaLinksComponent,
        ConsultaLinksComponent,
        CadastroLinkComponent,
        ConsultaQuestionarioComponent,
        CadastroQuestionarioComponent,
        ConsultaArtigoComponent,
        CadastroArtigoComponent
    ],
    providers: [
        PesquisadoresService,
        UtilsService,
        GeradorPaginaService,
        AreaPesquisaService,
        GrupoPesquisaService,
        CategoriaLinkService,
        LinkUtilService,
        QuestionarioService,
        ArtigoService
    ],
})
export class PagesModule { }
