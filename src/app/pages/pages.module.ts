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
import { AreaPesquisaComponent } from './area-pesquisa/area-pesquisa.component';
import { CadastroGrupoPesquisaComponent } from './grupo-pesquisa/cadastro-grupo-pesquisa/cadastro-grupo-pesquisa.component';
import { ConsultaGrupoPesquisaComponent } from './grupo-pesquisa/consulta-grupo-pesquisa/consulta-grupo-pesquisa.component';
import { GrupoPesquisaService } from './grupo-pesquisa/grupo-pesquisa.service';
import { CategoriaLinkComponent } from './categoria-link/categoria-link.component';
import { CategoriaLinkService } from './categoria-link/categoria-link.service';
import { LinkUtilService } from './link-util/link-util.service';
import { CadastroLinkComponent } from './link-util/cadastro-link/cadastro-link.component';
import { ConsultaLinksComponent } from './link-util/consulta-link/consulta-link.component';

@NgModule({
    imports: [PagesRoutingModule, NgZorroAntdModule, CommonModule, ReactiveFormsModule, FormsModule],
    exports: [],
    declarations: [ConsultaPesquisadoresComponent, CadastroPesquisadorComponent, HomeComponent, GeradorPaginaComponent, AreaPesquisaComponent, CadastroGrupoPesquisaComponent, ConsultaGrupoPesquisaComponent, CategoriaLinkComponent, CadastroLinkComponent, ConsultaLinksComponent],
    providers: [PesquisadoresService, UtilsService, GeradorPaginaService, AreaPesquisaService, GrupoPesquisaService, CategoriaLinkService, LinkUtilService],
})
export class PagesModule { }
