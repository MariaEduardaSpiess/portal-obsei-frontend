import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UtilsService } from 'src/app/utils/utils.service';
import { AreaPesquisa } from 'src/app/models/area-pesquisa';
import { AreaPesquisaService } from '../area-pesquisa.service';
import { Location } from '@angular/common';

@Component({
    selector: 'cadastro-area-pesquisa',
    templateUrl: 'cadastro-area-pesquisa.component.html'
})

export class CadastroAreaPesquisaComponent implements OnInit {
    
    form = new FormGroup({
        nome: new FormControl('', [Validators.required]),
    });

    editArea: AreaPesquisa;
    
    constructor(private utils: UtilsService, private mainService: AreaPesquisaService, private _location: Location) { }

    ngOnInit() {
        this.editArea = JSON.parse(localStorage.getItem('areaPesquisa'));
        if (this.editArea) {
            this.form.patchValue(this.editArea);
        }
    }

    save(): void {
        this.utils.validateForm(this.form);

        if (this.form.valid) {
            if (this.editArea) {
                this.mainService.atualizarAreaPesquisa(this.editArea.id, this.form.value)
                    .subscribe(() => {
                        this.utils.success('Sucesso!', 'A área de pesquisa foi atualizada com sucesso.', this.previousPage());
                    }, err => {
                        this.utils.error('Erro!', 'Não foi possível atualizar a área de pesquisa, entre em contato com o administrador do sistema.');
                        console.log(err);
                    });
            } else {
                this.mainService.inserirAreaPesquisa(this.form.value)
                    .subscribe(() => {
                        this.utils.success('Sucesso!', 'A nova área de pesquisa foi salvo com sucesso.', this.previousPage());
                    }, err => {
                        this.utils.error('Erro!', 'Não foi possível salvar a área de pesquisa, entre em contato com o administrador do sistema.');
                        console.log(err);
                    });
            }
        }
    }

    previousPage() {
        this._location.back();
    }
}