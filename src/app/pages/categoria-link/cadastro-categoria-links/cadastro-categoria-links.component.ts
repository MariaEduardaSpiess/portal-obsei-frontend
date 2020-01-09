import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UtilsService } from 'src/app/utils/utils.service';
import { CategoriaLinkService } from '../categoria-link.service';

@Component({
    selector: 'cadastro-categoria-links',
    templateUrl: 'cadastro-categoria-links.component.html'
})

export class CadastroCategoriaLinksComponent implements OnInit {
    
    form = new FormGroup({
        nome: new FormControl('', [Validators.required])
    });
    
    constructor(private utils: UtilsService, private mainService: CategoriaLinkService) { }

    ngOnInit() {}

    save(): void {
        this.utils.validateForm(this.form);

        if (this.form.valid) {
            this.mainService.postCategoria(this.form.value)
                .subscribe(() => {
                    console.log('deu boa');
                });
        }
    }
}