import { Component, OnInit } from '@angular/core';
import { AreaPesquisaService } from './area-pesquisa.service';
import { FormGroup, FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AreaPesquisa } from 'src/app/models/area-pesquisa';

@Component({
    selector: 'area-pesquisa',
    templateUrl: 'area-pesquisa.component.html'
})

export class AreaPesquisaComponent implements OnInit {

    areasPesquisa: Array<AreaPesquisa>;
    editId: number;

    form = new FormGroup({
        areas: new FormArray([])
    });

    constructor(private areaPesquisaService: AreaPesquisaService, private fb: FormBuilder) { }

    get formArray() {
        return this.form.get('areas') as FormArray;
    }
    ngOnInit() {
        this.getAreasPesquisa();
    }

    getAreasPesquisa() {
        this.areaPesquisaService.getAreasPesquisa()
            .subscribe((res) => {
                this.areasPesquisa = res;
                this.areasPesquisa.forEach((area) => {
                    this.formArray.push(this.createItem(area));
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