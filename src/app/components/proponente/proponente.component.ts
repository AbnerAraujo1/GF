import { Component } from '@angular/core';
import { faLink, faCircleChevronDown } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-proponente',
  templateUrl: './proponente.component.html',
  styleUrls: ['./proponente.component.css']
})
export class ProponenteComponent {
  faLink = faLink;

  dataAval:string="11/09/2022"
  nProposta:string="GF22/0001"
  produto:string="Previdência Individual"
  cpf:string ="312.286.988-00"
  nome:string="Marcos Oliveira Morais"
  vinculoCnpj:string="02"
}
