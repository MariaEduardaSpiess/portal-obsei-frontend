import { Component, OnInit } from '@angular/core';
import { Questionario } from 'src/app/models/questionario';
import { ArtigoService } from '../artigo.service';
import { Artigo } from 'src/app/models/artigo';

@Component({
  selector: 'consulta-artigo',
  templateUrl: './consulta-artigo.component.html'
})
export class ConsultaArtigoComponent implements OnInit {

  artigos: Artigo[];

  constructor(private mainService: ArtigoService) { }

  ngOnInit() {
    this.getCategorias();
  }

  getCategorias() {
    this.mainService.getArtigos()
      .subscribe((res: Questionario[]) => {
        this.artigos = res;
      });
  }

}
