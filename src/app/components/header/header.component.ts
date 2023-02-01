import { Component } from '@angular/core';
import {  faXmark, faFileLines, faLink, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { jsPDF } from 'jspdf';
import html2canvas  from 'html2canvas';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  faFileLines = faFileLines;
  faXmark = faXmark
  faLink = faLink;
  faEllipsisVertical = faEllipsisVertical ;
  dataHoraAtu:string="12 Outubro 2022 - 14:30min";
  copyUrl:any = document.location.href;
  mostrarMsg:boolean = false;


 botaoClicado() {
  this.mostrarMsg=!this.mostrarMsg;
  setTimeout(() =>{
    this.mostrarMsg=!this.mostrarMsg;
  }, 2000)

}


USERS = [
  {
    "cpf" : 67867601040,
    "cpfConstaAnaliseEspecial": 1,
    "cpfConstaListaPep": 1,
    "situacaoCpf": 2,
    "similaridadeNome": 1,
    "dataNascimentoProposta": 1,
    "cepEnderecoPreenchido": 1,
    "profissao":"Checar com CBO",
    "rendaDeclarada": 1,
    "limiteContribuicaoMensal": 1,

  },

];
public openPDF(): void {
  let DATA: any = document.getElementById('htmlData');
  html2canvas(DATA).then((canvas) => {
    let fileWidth = 208;
    let fileHeight = (canvas.height * fileWidth) / canvas.width;
    const FILEURI = canvas.toDataURL('image/png');
    let PDF = new jsPDF('p', 'mm', 'a4');
    let position = 0;
    PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
    PDF.save('angular-demo.pdf');
  });
}


};


