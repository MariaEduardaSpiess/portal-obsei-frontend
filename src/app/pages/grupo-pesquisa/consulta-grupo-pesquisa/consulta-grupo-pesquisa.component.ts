import { Component, OnInit } from '@angular/core';
import { GrupoPesquisaService } from '../grupo-pesquisa.service';
import { GrupoPesquisa } from 'src/app/models/grupo-pesquisa';

@Component({
  selector: 'grupos-pesquisa',
  templateUrl: './consulta-grupo-pesquisa.component.html'
})
export class ConsultaGrupoPesquisaComponent implements OnInit {

  gruposPesquisa: GrupoPesquisa[];

  constructor(private grupoPesquisaService: GrupoPesquisaService) { }

  ngOnInit() {
    this.getPesquisadores();
  }

  getPesquisadores() {
    this.grupoPesquisaService.getGruposPesquisa()
      .subscribe((res: GrupoPesquisa[]) => {
        this.gruposPesquisa = res;
      });
  }

}
