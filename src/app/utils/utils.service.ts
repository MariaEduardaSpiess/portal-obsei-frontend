import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable()
export class UtilsService {

    constructor() { }

    validateForm(form: FormGroup): void {
        for (const i in form.controls) {
            form.controls[i].markAsDirty();
            form.controls[i].updateValueAndValidity();
        }
    }
}