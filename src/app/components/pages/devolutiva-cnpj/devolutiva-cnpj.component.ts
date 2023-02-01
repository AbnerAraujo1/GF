import { Component } from '@angular/core';

import { faLink, faCircleChevronDown, faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { faCircleDot } from '@fortawesome/free-regular-svg-icons';


@Component({
  selector: 'app-devolutiva-cnpj',
  templateUrl: './devolutiva-cnpj.component.html',
  styleUrls: ['./devolutiva-cnpj.component.css']
})
export class DevolutivaCnpjComponent {
  faLink = faLink;
  faCircleInfo = faCircleInfo;
  farCircleDot= faCircleDot;
  faCircleChevronDown = faCircleChevronDown;

  dataAval:string="11/09/2022"
  nProposta:string="GF22/0001"
  produto:string="Previdência Coletivo"
  cnpj:string ="22.286.450.0001-12"
  nome:string="Moveis Industriais Ltda"
  vinculoCnpj:string="02"

}
