export class vendaDTO{
    ValorItens: number;
    ValorDesconto: number;
    PercentualDesconto: number;
    ValorTotal: number;
    VendaItem: [];
    VendaContrato: VendaContrato[];
    CodigoUsuario: number;
    Recorrente: boolean;
    VendaParcela: VendaParcela[];
    Data: string;
    RenovarAutomaticamente: boolean;
    CodigoCliente: number
}

export class VendaContrato{
        AgendarDataInicio: boolean;
        CodigoContratoBase: number;
        ValorAdesao: number;
        ValorOriginal: number;
        PercentualDescontoVip: number;
        PercentualDesconto: number;
        ValorDesconto:number ;
        ValorTotal: number;
        GradesHorarios: []
    }

export class VendaParcela{
    Numero: number;
    DataVencimento: string;
    Valor: number
}