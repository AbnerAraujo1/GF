
import { Injectable } from '@angular/core';
  
import { Observable } from 'rxjs'; 
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class DadosPropService {

  data: any[] = [];

  constructor(private http: HttpClient) { }
  postData(data: any) {
    const url = "https://api-services-hml2.digital-segurosunimed.com/motor-analise-cliente/rest/aplica-regra";
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'x-api-key':'LJdvMJ6dmY5isQ8B6DxUw99Y9R0PCbbUaHpP7wzl'});
    return this.http.post(url, data, { headers });
  }
  
  onSubmit() {
    const data = {
      "regras": [
        {
          "codigoRegra": 55,
          "atributos": [
            {
              "nomeAtributo": "qtdeVidasProposta",
              "valorAtributo": 6
            },
            {
              "nomeAtributo": "qtdeFuncionarios",
              "valorAtributo": 5
            }
          ]
        },
        {
          "codigoRegra": 5,
          "atributos": [
            {
              "nomeAtributo": "dataNascimentoProposta",
              "valorAtributo": "01/01/1990"
            },
            {
              "nomeAtributo": "dataNascimentoBaseConsulta",
              "valorAtributo": "01/01/1990"
            }
          ]
        },
        {
          "codigoRegra": 8,
          "atributos": [
            {
              "nomeAtributo": "profissaoProposta",
              "valorAtributo": "1234567"
            },
            {
              "nomeAtributo": "profissaoBaseConsulta",
              "valorAtributo": "123456"
            }
          ]
        },
        {
          "codigoRegra": 10,
          "atributos": [
            {
              "nomeAtributo": "rendaDeclaradaProposta",
              "valorAtributo": 5000
            },
            {
              "nomeAtributo": "valorContribuicaoMensalProposta",
              "valorAtributo": 1600.00
            }
          ]
        },
        {
          "codigoRegra": 3,
          "atributos": [
            {
              "nomeAtributo": "situacaoCpf",
              "valorAtributo": 3
            }
          ]
        },
        {
          "codigoRegra": 1,
          "atributos": [
            {
              "nomeAtributo": "cpfConstaAnaliseEspecial",
              "valorAtributo": 1
            }
          ]
        },
        {
          "codigoRegra": 2,
          "atributos": [
            {
              "nomeAtributo": "cpfConstaListaPep",
              "valorAtributo": 1
            }
          ]
        }
      ]
    };

    return this.postData(data);
  } }