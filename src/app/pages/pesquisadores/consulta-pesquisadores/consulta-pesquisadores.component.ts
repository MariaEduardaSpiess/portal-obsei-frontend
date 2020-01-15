import { Component, OnInit } from '@angular/core';
import { PesquisadoresService } from '../pesquisadores.service';
import { Pesquisador } from 'src/app/models/pesquisador';
import { UtilsService } from 'src/app/utils/utils.service';

@Component({
  selector: 'consulta-pesquisadores',
  templateUrl: './consulta-pesquisadores.component.html'
})
export class ConsultaPesquisadoresComponent implements OnInit {

  pesquisadores: Pesquisador[];
  isLoading: boolean;

  constructor(private pesquisadoresService: PesquisadoresService, private utils: UtilsService) { }

  ngOnInit() {
    this.getPesquisadores();
  }

  getPesquisadores() {
    this.isLoading = true;
    this.pesquisadoresService.getPesquisadores()
      .subscribe((res: Pesquisador[]) => {
        this.isLoading = false;
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
    this.utils.confirm('Confirmar', 'Você realmente deseja excluir este registro? Essa ação é irreversível', () => {
      this.isLoading = true;
      this.pesquisadoresService.excluirPesquisador(id).subscribe(() => {
        this.isLoading = false;
        this.utils.success('Sucesso!', 'O pesquisador foi excluído com sucesso.', this.getPesquisadores());
        console.log('excluido');
      });
    });
  }

}
