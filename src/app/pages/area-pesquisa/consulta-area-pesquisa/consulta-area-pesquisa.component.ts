import { Component, OnInit } from '@angular/core';
import { AreaPesquisaService } from '../area-pesquisa.service';
import { FormGroup, FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AreaPesquisa } from 'src/app/models/area-pesquisa';

@Component({
    selector: 'consulta-area-pesquisa',
    templateUrl: 'consulta-area-pesquisa.component.html'
})

export class ConsultaAreaPesquisaComponent implements OnInit {

    areasPesquisa: Array<AreaPesquisa>;
    editId: number;

    constructor(private areaPesquisaService: AreaPesquisaService, private fb: FormBuilder) { }

    ngOnInit() {
        this.getAreasPesquisa();
    }

    getAreasPesquisa() {
        this.areaPesquisaService.getAreasPesquisa()
            .subscribe((res) => {
                this.areasPesquisa = res;
            });
    }

    edit(id) {
        this.editId = id;
    }

    cancelEdit() {
        this.editId = undefined;
    }

    save() {}
}