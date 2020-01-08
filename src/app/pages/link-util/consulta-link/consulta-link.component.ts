import { Component, OnInit } from '@angular/core';
import { LinkUtilService } from '../link-util.service';
import { LinkUtil } from 'src/app/models/link-util';

@Component({
  selector: 'consulta-link',
  templateUrl: './consulta-link.component.html'
})
export class ConsultaLinksComponent implements OnInit {

  links: LinkUtil[];

  constructor(private linkService: LinkUtilService) { }

  ngOnInit() {
    this.getPesquisadores();
  }

  getPesquisadores() {
    this.linkService.getLinksUteis()
      .subscribe((res: LinkUtil[]) => {
        this.links = res;
      });
  }

}
