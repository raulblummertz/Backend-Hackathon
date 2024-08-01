import { Controller, Get, Query, Post, Body } from "@nestjs/common";
import { ExemploService } from "./exemplo.service";
import { vendaDTO } from "./dto/venda.dto";



@Controller("exemplo")
export class ExemploController {
  constructor(private readonly exemploService: ExemploService) {}

// exemplo

  @Get("GetAmbienteUsuario")
  getAmbienteUsuario(
    @Query("authorization") authorization: string,
    @Query("codigoUsuario") codigoUsuario: string,
    @Query("codigoUnidade") codigoUnidade: string,
  ) {
    return this.exemploService.getAmbienteUsuario(
      authorization,
      codigoUsuario,
      codigoUnidade,
    );
  }

  @Get("GetEnums")
  getEnums(@Query("authorization") authorization: string) {
    return this.exemploService.getEnums(authorization);
  }

// construção

  @Get("GetRaulUsuario")
  getRaulUsuario(
    @Query("authorization") authorization: string,
    @Query("codigoUsuario") codigoUsuario: string,
    @Query("codigoUnidade") codigoUnidade: string,
  ) {
    return this.exemploService.getRaulUsuario(
      authorization,
      codigoUsuario,
      codigoUnidade,
    );
  }

  @Get("GetCliente")
  getCliente(
    @Query("authorization") authorization: string,
    @Query("cpf") cpf: string,
  ) {
    return this.exemploService.getCliente(
      authorization,
      cpf,
    );
  }

  @Get("GetTreinos")
  getTreinos(
    @Query("authorization") authorization: string,
    @Query("codigoCliente") codigoCliente: number
  ) {
    return this.exemploService.getTreinos(
      authorization,
      codigoCliente
    );
  }

  @Get("GetTreinoPorId")
  getTreinoPorId(
    @Query("authorization") authorization: string,
    @Query("codigoTreino") codigoTreino: number,
    @Query("codigoSessao") codigoSessao: number
  ) {
    return this.exemploService.getTreinoPorId(
      authorization,
      codigoTreino,
      codigoSessao
    );
  }

  @Get("GetContratos")
  getContratos(
    @Query("authorization") authorization: string,
  ) {
    return this.exemploService.getContratos(
      authorization,
    );
  }

  @Get("GetVendas")
  getVendas(
    @Query("authorization") authorization: string,
  ) {
    return this.exemploService.getVendas(
      authorization,
    );
  }

    @Post('venda')
    postVendas(@Body() vendaDTO:vendaDTO, @Query("authorization") authorization: string ) {
      return this.exemploService.postVendas(
        authorization,
        vendaDTO
      );
  }
  
  
}
