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
    });

    foto = new FormGroup({
        descricaoFoto: new FormControl('', [Validators.required]),
        base64: new FormControl('', [Validators.required])
    });

    ngOnInit() {
        this.editPesquisador = JSON.parse(localStorage.getItem('pesquisador'));
        if (this.editPesquisador) {
            this.form.patchValue(this.editPesquisador);
            this.getPicture();
        }
    }

    getPicture() {
        this.mainService.getFotoPesquisador(this.editPesquisador.id).subscribe(foto => {
            this.foto.patchValue(foto);
        });
    }

    uploadFile() {
        const element = document.querySelector('#input-file') as HTMLElement;
        element.click();
    }

    changeFile(inputValue: any) {
        var file: File = inputValue.files[0];
        this.foto.patchValue({ descricaoFoto: file.name });

        var myReader: FileReader = new FileReader();

        myReader.onloadend = (e) => {
            this.foto.patchValue({ base64: myReader.result });
        }
        myReader.readAsDataURL(file);
    }

    save(): void {
        this.utils.validateForm(this.form);
        if (this.form.valid && this.foto.valid) {
            if (this.editPesquisador) {
                this.mainService.atualizarPesquisador(this.editPesquisador.id, this.editPesquisador.foto.id, this.getSavePayload())
                    .subscribe(() => {
                        this.utils.success('Sucesso!', 'O pesquisador foi atualizado com sucesso.', this.previousPage());
                    }, err => {
                        this.utils.error('Erro!', 'Não foi possível atualizar o pesquisador, entre em contato com o administrador do sistema.');
                    });
            } else {
                this.mainService.inserirPesquisador(this.getSavePayload())
                    .subscribe(() => {
                        this.utils.success('Sucesso!', 'O novo pesquisador foi salvo com sucesso.', this.previousPage());
                    }, err => {
                        this.utils.error('Erro!', 'Não foi possível salvar o pesquisador, entre em contato com o administrador do sistema.');
                    });
            }
        }
    }

    getSavePayload() {
        return {
            pesquisador: this.form.value,
            fotoPesquisador: this.foto.value
        }
    }

    previousPage() {
        this._location.back();
    }
}