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

@NgModule({
    imports: [PagesRoutingModule, NgZorroAntdModule, CommonModule, ReactiveFormsModule, FormsModule],
    exports: [],
    declarations: [ConsultaPesquisadoresComponent, CadastroPesquisadorComponent, HomeComponent, GeradorPaginaComponent, AreaPesquisaComponent],
    providers: [PesquisadoresService, UtilsService, GeradorPaginaService, AreaPesquisaService],
})
export class PagesModule { }
