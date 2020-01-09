import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UtilsService } from 'src/app/utils/utils.service';
import { QuestionarioService } from '../questionario.service';

@Component({
    selector: 'cadastro-questionario',
    templateUrl: 'cadastro-questionario.component.html'
})

export class CadastroQuestionarioComponent implements OnInit {
    
    form = new FormGroup({
        titulo: new FormControl('', [Validators.required]),
        link: new FormControl('', [Validators.required])
    });
    
    constructor(private utils: UtilsService, private mainService: QuestionarioService) { }

    ngOnInit() {}

    save(): void {
        this.utils.validateForm(this.form);

        if (this.form.valid) {
            this.mainService.postQuestionario(this.form.value)
                .subscribe(() => {
                    console.log('deu boa');
                });
        }
    }
}