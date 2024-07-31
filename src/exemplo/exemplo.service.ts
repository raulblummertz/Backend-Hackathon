import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
const apiURL = 'https://api.sandbox.appnext.fit/api/';
@Injectable()
export class ExemploService {
  constructor(private readonly httpService: HttpService) {}
 
  async getAmbienteUsuario(
    authorization: string,
    codigoUsuario: string,
    codigoUnidade: string,
  ) {
    const apiURL = 'https://api.sandbox.appnext.fit/api/';

    const headers = {
      Authorization: `${authorization}`,
    };

    const params = {
      CodigoUsuario: codigoUsuario,
      CodigoUnidade: 7
    };

    const response = await firstValueFrom(
      this.httpService.get(`${apiURL}Usuario/RecuperarAmbienteUsuario`, { headers, params }),
    );

    return response.data;
  }

  async getEnums(authorization: string) {
    const apiURL = 'https://api.sandbox.appnext.fit/api/';

    const headers = {
      Authorization: `${authorization}`,
    };

    const response = await firstValueFrom(
      this.httpService.get(`${apiURL}Enum/RecuperarTodos`, { headers }),
    );

    return response.data;
  }



  // 

  async getRaulUsuario(
    authorization: string,
    codigoUsuario: string,
    codigoUnidade: string,
  ) {
    return {
      codigoUsuario,
      codigoUnidade
    }
  }

  async getCliente(
    authorization: string,
    cpf: string,
    ) {
      const apiURL = 'https://api.sandbox.appnext.fit/api/';

      const headers = {
      Authorization: `${authorization}`,
      };

      const response = await firstValueFrom(
      this.httpService.get(`${apiURL}Cliente/recuperarPesquisaGeral?CodigosUnidadesStr=%5B%5D&Descricao=${cpf}`, { headers }),
      );

    return {
      Id:response.data.Content[0].Id,
      Nome:response.data.Content[0].Nome,
    }
  }

  async getTreinos (    
    authorization: string,
    codigoCliente: number
  ){
    const apiURL = 'https://api.sandbox.appnext.fit/api/';

    const headers = {
    Authorization: `${authorization}`,
    };
    const response = await firstValueFrom(
      this.httpService.get(`${apiURL}treino?filter=[{"property":"CodigoCliente","operator":"equal","value":"${codigoCliente}","and":true},{"property":"Inativo","operator":"equal","value":false,"and":true}]`, { headers }),
      );
      const responseSessao = await firstValueFrom(
        this.httpService.get(`${apiURL}treino/recuperarView?Codigo=${response.data.Content[0].Id}`, { headers }),
        );

    return {
      Id: responseSessao.data.Content.Id,
      SessaoAtual:responseSessao.data.Content.SessaoAtual
    }

  }



  async getTreinoPorId (    
    authorization: string,
    codigoTreino: number,
    codigoSessao: number
  ){
    const apiURL = 'https://api.sandbox.appnext.fit/api/';

    const headers = {
    Authorization: `${authorization}`,
    };

    console.log(codigoTreino)

    const response = await firstValueFrom(
      this.httpService.get(`${apiURL}treino/recuperarView?Codigo=${codigoTreino}`, { headers }),
      );

  
    return response.data.Content.Sessoes.filter(x => x.TipoSessao == codigoSessao)[0].Exercicios.map(Exercicio => {
      return {
        nome: Exercicio.Exercicio.Nome,
        repetições: Exercicio.Repeticoes ?? Exercicio.Tempo,
        carga: Exercicio.Carga,
        intervalo: Exercicio.Intervalo,
        observacoes: Exercicio.Observacoes
      };
    })
  }
  async getContratos(authorization: string) {
    const apiURL = 'https://api.sandbox.appnext.fit/api/';

    const headers = {
      Authorization: `${authorization}`,
    };

    const response = await firstValueFrom(
      this.httpService.get(`${apiURL}ContratoBase?filter=[{"property":"VendeOnline","operator":"equal","value":true,"and":true}]`, { headers }),
    );

    return response.data.Content.map(contrato => {
      return {
        nomeContrato: contrato.Descricao,
        duracaoContrato: contrato.TempoDuracao,
        tipoDuracaoContrato: contrato.TipoDuracao,
        valorContrato: contrato.ValorTotal,
        adesaoContrato: contrato.TemValorAdesao,
        valorAdesaoContrato: contrato.ValorAdesao,
      }
    });
  }
  
  async getVendas(authorization: string) {
    const apiURL = 'https://api.sandbox.appnext.fit/api/';

    const headers = {
      Authorization: `${authorization}`,
    };

    const response = await firstValueFrom(
      this.httpService.get(`${apiURL}venda`, { headers }),
    );

    return response.data;
  }


}
