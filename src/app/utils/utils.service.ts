import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NzModalService } from 'ng-zorro-antd';

@Injectable()
export class UtilsService {

    constructor(private modalService: NzModalService) { }

    validateForm(form: FormGroup): void {
        for (const i in form.controls) {
            form.controls[i].markAsDirty();
            form.controls[i].updateValueAndValidity();
        }
    }

    info(titulo, msg, callback): void {
        this.modalService.info({
            nzTitle: titulo,
            nzContent: msg,
            nzOnOk: callback
        });
    }

    success(titulo, msg, callback): void {
        this.modalService.success({
            nzTitle: titulo,
            nzContent: msg,
            nzOnOk: callback
        });
    }

    error(titulo, msg): void {
        this.modalService.error({
            nzTitle: titulo,
            nzContent: msg
        });
    }

    warning(titulo, msg, callback): void {
        this.modalService.warning({
            nzTitle: titulo,
            nzContent: msg,
            nzOnOk: callback
        });
    }

    confirm(titulo, msg, callback): void {
        this.modalService.confirm({
            nzTitle: titulo,
            nzContent: msg,
            nzCancelText: 'Cancelar',
            nzOkText: 'Excluir',
            nzOnOk: callback
        });
    }
}