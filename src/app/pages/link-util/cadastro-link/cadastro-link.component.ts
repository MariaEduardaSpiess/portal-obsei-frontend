import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UtilsService } from 'src/app/utils/utils.service';
import { LinkUtilService } from '../link-util.service';
import { CategoriaLinkService } from '../../categoria-link/categoria-link.service';
import { CategoriaLinks } from 'src/app/models/categoria-links';

@Component({
    selector: 'cadastro-link-util',
    templateUrl: 'cadastro-link.component.html'
})

export class CadastroLinkComponent implements OnInit {
    
    categorias: CategoriaLinks[];
    form = new FormGroup({
        titulo: new FormControl('', [Validators.required]),
        link: new FormControl('', [Validators.required]),
        categoriaLink: new FormControl(CategoriaLinks, [Validators.required])
    });
    
    constructor(private utils: UtilsService, private mainService: LinkUtilService, private categoriaLinksService: CategoriaLinkService) { }

    ngOnInit() {
        this.categoriaLinksService.getCategorias()
            .subscribe((res: CategoriaLinks[]) => {
                this.categorias = res;
            });
    }

    save(): void {
        this.utils.validateForm(this.form);

        if (this.form.valid) {
            this.mainService.postLinkUtil(this.form.value)
                .subscribe(() => {
                    console.log('deu boa');
                });
        }
    }
}