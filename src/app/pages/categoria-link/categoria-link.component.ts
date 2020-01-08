import { Component, OnInit } from '@angular/core';
import { CategoriaLinkService } from './categoria-link.service';
import { FormGroup, FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
import { CategoriaLinks } from 'src/app/models/categoria-links';

@Component({
    selector: 'categoria-link',
    templateUrl: 'categoria-link.component.html'
})

export class CategoriaLinkComponent implements OnInit {

    categorias: Array<CategoriaLinks>;
    editId: number;

    form = new FormGroup({
        categorias: new FormArray([])
    });

    constructor(private mainService: CategoriaLinkService, private fb: FormBuilder) { }

    get formArray() {
        return this.form.get('categorias') as FormArray;
    }
    ngOnInit() {
        this.getCategorias();
    }

    getCategorias() {
        this.mainService.getCategorias()
            .subscribe((res) => {
                this.categorias = res;
                this.categorias.forEach((categoria) => {
                    this.formArray.push(this.createItem(categoria));
                });
            });
    }

    createItem(value): FormGroup {
        return this.fb.group({
            id: new FormControl(value.id),
            nome: new FormControl(value.nome, [Validators.required])
        });
    }

    edit(id) {
        this.editId = id;
    }

    cancelEdit() {
        this.editId = undefined;
    }

    save() {}
}