import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UtilsService } from 'src/app/utils/utils.service';
import { GrupoPesquisaService } from '../grupo-pesquisa.service';
import { AreaPesquisa } from 'src/app/models/area-pesquisa';
import { AreaPesquisaService } from '../../area-pesquisa/area-pesquisa.service';

@Component({
    selector: 'cadastro-grupo-pesquisa',
    templateUrl: 'cadastro-grupo-pesquisa.component.html'
})

export class CadastroGrupoPesquisaComponent implements OnInit {
    
    areasPesquisa: AreaPesquisa[];
    form = new FormGroup({
        nome: new FormControl('', [Validators.required]),
        areaPesquisa: new FormControl(AreaPesquisa, [Validators.required])
    });
    
    constructor(private utils: UtilsService, private mainService: GrupoPesquisaService, private areaPesquisaService: AreaPesquisaService) { }

    ngOnInit() {
        this.areaPesquisaService.getAreasPesquisa()
            .subscribe((res: AreaPesquisa[]) => {
                this.areasPesquisa = res;
            });
    }

    save(): void {
        this.utils.validateForm(this.form);

        if (this.form.valid) {
            this.mainService.postGrupoPesquisa(this.form.value)
                .subscribe(() => {
                    console.log('deu boa');
                });
        }
    }
}