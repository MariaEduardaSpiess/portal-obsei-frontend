import { Component, OnInit } from '@angular/core';
import { AreaPesquisaService } from '../area-pesquisa.service';
import { FormGroup, FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AreaPesquisa } from 'src/app/models/area-pesquisa';
import { UtilsService } from 'src/app/utils/utils.service';

@Component({
    selector: 'consulta-area-pesquisa',
    templateUrl: 'consulta-area-pesquisa.component.html'
})

export class ConsultaAreaPesquisaComponent implements OnInit {

    areasPesquisa: Array<AreaPesquisa>;
    editId: number;
    isLoading: boolean;

    constructor(private areaPesquisaService: AreaPesquisaService, private utils: UtilsService) { }

    ngOnInit() {
        this.getAreasPesquisa();
    }

    getAreasPesquisa() {
        this.isLoading = true;
        this.areaPesquisaService.getAreasPesquisa()
            .subscribe((res) => {
                this.isLoading = false;
                this.areasPesquisa = res;
            });
    }

    editarAreaPesquisa(data) {
        localStorage.setItem('areaPesquisa', JSON.stringify(data));
    }

    cancelEdit() {
        this.editId = undefined;
    }

    excluirAreaPesquisa(id) {
        this.utils.confirm('Confirmar', 'Você realmente deseja excluir este registro? Essa ação é irreversível', () => {
            this.isLoading = true;
            this.areaPesquisaService.excluirAreaPesquisa(id).subscribe(() => {
                this.isLoading = false;
                this.utils.success('Sucesso!', 'A área de pesquisa foi excluída com sucesso.', this.getAreasPesquisa());
                console.log('excluido');
            });
        });
    }

    addAreaPesquisa() {
        localStorage.removeItem('areaPesquisa');
    }
}