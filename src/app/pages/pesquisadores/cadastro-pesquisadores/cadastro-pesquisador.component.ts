import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UtilsService } from 'src/app/utils/utils.service';
import { PesquisadoresService } from '../pesquisadores.service';

@Component({
    selector: 'cadastro-pesquisador',
    templateUrl: 'cadastro-pesquisador.component.html',
    styleUrls: ['cadastro-pesquisador.component.scss']
})

export class CadastroPesquisadorComponent implements OnInit {
    constructor(private utils: UtilsService, private mainService: PesquisadoresService) { }

    form = new FormGroup({
        nome: new FormControl('', [Validators.required]),
        funcao: new FormControl('', [Validators.required]),
        lattes: new FormControl('', [Validators.required]),
        foto: new FormControl('', [Validators.required]),
        descricaoFoto: new FormControl('', [Validators.required])
    });

    ngOnInit() { }

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
            this.mainService.inserirPesquisador(this.form.value)
                .subscribe(() => {
                    console.log('deu boa');
                });
        }
    }
}