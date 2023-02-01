import { Component } from '@angular/core';
import { faLink, faCircleChevronUp } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-dados-da-proposta',
  templateUrl: './dados-da-proposta.component.html',
  styleUrls: ['./dados-da-proposta.component.css']
})
export class DadosDaPropostaComponent {
 faLink = faLink;
  faCircleChevronUp = faCircleChevronUp;
  
  dataAval: string="11/09/2022"
  nProposta: string="GF22/0001"
  produto: string="Previdência Individual"
  cpf: string ="312.286.988-00"
  nome: string="Marcos Oliveira Morais"
  vinculoCnpj: string="02"
}
