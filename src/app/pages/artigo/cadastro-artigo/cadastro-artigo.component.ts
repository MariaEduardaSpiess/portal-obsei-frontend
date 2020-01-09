import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UtilsService } from 'src/app/utils/utils.service';
import { ArtigoService } from '../artigo.service';

@Component({
    selector: 'cadastro-artigo',
    templateUrl: 'cadastro-artigo.component.html'
})

export class CadastroArtigoComponent implements OnInit {
    
    form = new FormGroup({
        titulo: new FormControl('', [Validators.required]),
        link: new FormControl('', [Validators.required])
    });
    
    constructor(private utils: UtilsService, private mainService: ArtigoService) { }

    ngOnInit() {}

    save(): void {
        this.utils.validateForm(this.form);

        if (this.form.valid) {
            this.mainService.postArtigo(this.form.value)
                .subscribe(() => {
                    console.log('deu boa');
                });
        }
    }
}