import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UtilsService } from 'src/app/utils/utils.service';
import { AreaPesquisa } from 'src/app/models/area-pesquisa';
import { AreaPesquisaService } from '../area-pesquisa.service';

@Component({
    selector: 'cadastro-area-pesquisa',
    templateUrl: 'cadastro-area-pesquisa.component.html'
})

export class CadastroAreaPesquisaComponent implements OnInit {
    
    areasPesquisa: AreaPesquisa[];
    form = new FormGroup({
        nome: new FormControl('', [Validators.required]),
    });
    
    constructor(private utils: UtilsService, private mainService: AreaPesquisaService) { }

    ngOnInit() {}

    save(): void {
        this.utils.validateForm(this.form);

        if (this.form.valid) {
            this.mainService.postAreaPesquisa(this.form.value)
                .subscribe(() => {
                    console.log('deu boa');
                });
        }
    }
}