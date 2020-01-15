import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UtilsService } from 'src/app/utils/utils.service';
import { PesquisadoresService } from '../pesquisadores.service';
import { Location } from '@angular/common';

@Component({
    selector: 'cadastro-pesquisador',
    templateUrl: 'cadastro-pesquisador.component.html',
    styleUrls: ['cadastro-pesquisador.component.scss']
})

export class CadastroPesquisadorComponent implements OnInit {

    editPesquisador;

    constructor(private utils: UtilsService, private mainService: PesquisadoresService, private _location: Location) { }

    form = new FormGroup({
        nome: new FormControl('', [Validators.required]),
        funcao: new FormControl('', [Validators.required]),
        lattes: new FormControl('', [Validators.required]),
        foto: new FormControl('', [Validators.required]),
        descricaoFoto: new FormControl('', [Validators.required])
    });

    ngOnInit() {
        this.editPesquisador = JSON.parse(localStorage.getItem('pesquisador'));
        if (this.editPesquisador) {
            this.form.patchValue(this.editPesquisador);
        }
    }

    uploadFile() {
        const element = document.querySelector('#input-file') as HTMLElement;
        element.click();
    }

    changeFile(inputValue: any) {
        var file: File = inputValue.files[0];
        this.form.patchValue({ descricaoFoto: file.name });

        var myReader: FileReader = new FileReader();

        myReader.onloadend = (e) => {
            this.form.patchValue({ foto: myReader.result });
        }
        myReader.readAsDataURL(file);
    }

    save(): void {
        this.utils.validateForm(this.form);

        if (this.form.valid) {
            if (this.editPesquisador) {
                this.mainService.atualizarPesquisador(this.editPesquisador.id, this.form.value)
                    .subscribe(() => {
                        this.utils.success('Sucesso!', 'O pesquisador foi atualizado com sucesso.', this.previousPage());
                    }, err => {
                        this.utils.error('Erro!', 'Não foi possível atualizar o pesquisador, entre em contato com o administrador do sistema.');
                    });
            } else {
                this.mainService.inserirPesquisador(this.form.value)
                    .subscribe(() => {
                        this.utils.success('Sucesso!', 'O novo pesquisador foi salvo com sucesso.', this.previousPage());
                    }, err => {
                        this.utils.error('Erro!', 'Não foi possível salvar o pesquisador, entre em contato com o administrador do sistema.');
                    });
            }
        }
    }

    previousPage() {
        this._location.back();
    }
}