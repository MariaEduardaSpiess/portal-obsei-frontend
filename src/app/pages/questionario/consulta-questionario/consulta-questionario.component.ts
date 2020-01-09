import { Component, OnInit } from '@angular/core';
import { QuestionarioService } from '../questionario.service';
import { Questionario } from 'src/app/models/questionario';

@Component({
  selector: 'consulta-questionario',
  templateUrl: './consulta-questionario.component.html'
})
export class ConsultaQuestionarioComponent implements OnInit {

  questionarios: Questionario[];

  constructor(private mainService: QuestionarioService) { }

  ngOnInit() {
    this.getCategorias();
  }

  getCategorias() {
    this.mainService.getQuestionarios()
      .subscribe((res: Questionario[]) => {
        this.questionarios = res;
      });
  }

}
