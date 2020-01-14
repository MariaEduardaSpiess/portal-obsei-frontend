import { Component, OnInit } from '@angular/core';
import { PesquisadoresService } from '../pesquisadores.service';
import { Pesquisador } from 'src/app/models/pesquisador';

@Component({
  selector: 'consulta-pesquisadores',
  templateUrl: './consulta-pesquisadores.component.html'
})
export class ConsultaPesquisadoresComponent implements OnInit {

  pesquisadores: Pesquisador[];

  constructor(private pesquisadoresService: PesquisadoresService) { }

  ngOnInit() {
    this.getPesquisadores();
  }

  getPesquisadores() {
    this.pesquisadoresService.getPesquisadores()
      .subscribe((res: Pesquisador[]) => {
        this.pesquisadores = res;
      });
  }

  addPesquisador() {
    localStorage.removeItem('pesquisador');
  }

  editarPesquisador(data) {
    localStorage.setItem('pesquisador', JSON.stringify(data));
  }

  excluirPesquisador(id) {
    this.pesquisadoresService.excluirPesquisador(id).subscribe(() => {
      console.log('excluido');
    });
  }

}
