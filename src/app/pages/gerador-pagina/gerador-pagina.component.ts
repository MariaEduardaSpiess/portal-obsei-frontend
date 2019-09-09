import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'gerador-pagina',
    templateUrl: 'gerador-pagina.component.html',
    styleUrls: ['gerador-pagina.component.scss']
})

export class GeradorPaginaComponent implements OnInit {

    form = new FormGroup({
        headline: new FormControl(),
        texto: new FormControl(),
        imagem: new FormControl()
    })

    constructor() { }

    ngOnInit() { }
}