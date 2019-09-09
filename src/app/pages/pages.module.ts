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

@NgModule({
    imports: [PagesRoutingModule, NgZorroAntdModule, CommonModule, ReactiveFormsModule, FormsModule],
    exports: [],
    declarations: [ConsultaPesquisadoresComponent, CadastroPesquisadorComponent, HomeComponent, GeradorPaginaComponent],
    providers: [PesquisadoresService, UtilsService],
})
export class PagesModule { }
