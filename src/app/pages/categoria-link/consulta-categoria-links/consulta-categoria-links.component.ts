import { Component, OnInit } from '@angular/core';
import { CategoriaLinkService } from '../categoria-link.service';
import { CategoriaLinks } from 'src/app/models/categoria-links';

@Component({
  selector: 'consulta-categoria-links',
  templateUrl: './consulta-categoria-links.component.html'
})
export class ConsultaCategoriaLinksComponent implements OnInit {

  categorias: CategoriaLinks[];

  constructor(private mainService: CategoriaLinkService) { }

  ngOnInit() {
    this.getCategorias();
  }

  getCategorias() {
    this.mainService.getCategorias()
      .subscribe((res: CategoriaLinks[]) => {
        this.categorias = res;
      });
  }

}
