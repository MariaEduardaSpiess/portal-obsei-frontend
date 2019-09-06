import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UtilsService } from 'src/app/utils/utils.service';
import { PesquisadoresService } from '../pesquisadores.service';

@Component({
    selector: 'cadastro-pesquisador',
    templateUrl: 'cadastro-pesquisador.component.html'
})

export class CadastroPesquisadorComponent implements OnInit {
    constructor(private utils: UtilsService, private mainService: PesquisadoresService) { }

    form = new FormGroup({
        nome: new FormControl('', [Validators.required]),
        lattes: new FormControl('', [Validators.required])
    });
    ngOnInit() { }

    save(): void {
        this.utils.validateForm(this.form);

        if (this.form.valid) {
            this.mainService.inserirPesquisador(this.form.value);
        }
    }
}