import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { GeradorPaginaService } from './gerador-pagina.service';

@Component({
    selector: 'gerador-pagina',
    templateUrl: 'gerador-pagina.component.html',
    styleUrls: ['gerador-pagina.component.scss']
})

export class GeradorPaginaComponent implements OnInit {

    exampleText = `O Observatório do Empreendedorismo e Inovação (OBSEI) foi criado em 2017, como um projeto de pesquisa
                    que tem sido implementado e desenvolvido por professores e pesquisadores da Faculdade SOCIESC de Blumenau.
                    O OBSEI atualmente está inserido no grupo de pesquisa em Gestão e Tecnologia da Informação e Conhecimento, 
                    integrado ao conselho nacional de desenvolvimento científico e tecnológico (CNPq/DGP).`

    form = new FormGroup({
        headline: new FormControl(),
        descricao: new FormControl(),
        logo: new FormControl(),
        descricaoLogo: new FormControl()
    })

    constructor(private mainService: GeradorPaginaService) { }

    ngOnInit() { }

    uploadFile() {
        const element = document.querySelector('#input-file') as HTMLElement;
        element.click();
    }

    changeFile(inputValue: any) {
        var file: File = inputValue.files[0];
        this.form.patchValue({ descricaoLogo: file.name });

        var myReader: FileReader = new FileReader();

        myReader.onloadend = (e) => {
            this.form.patchValue({ logo: myReader.result });
        }
        myReader.readAsDataURL(file);
    }

    save() {
        this.mainService.inserir(this.form.value)
            .subscribe(() => {
                console.log('top')
            });
    }
}