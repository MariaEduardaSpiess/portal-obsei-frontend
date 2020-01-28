import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-welcome',
    template: `
        <h1>Olá, seja bem vindo!</h1>
    `
})

export class WelcomeComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}