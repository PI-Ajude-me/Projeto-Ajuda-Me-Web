import { AbstractControl, ValidationErrors } from '@angular/forms';

export function intervaloDataValidator(nomeCampo1: string,
                                       nomeCampo2: string,
                                       intervalorMinimo: number = 30) {
    return (formGroup: AbstractControl): ValidationErrors | null  => {
        // Etapa 1
        const valorDataInicial = nomeCampo1;
        const valorDataFinal =  nomeCampo2;

        // Etapa 2
        const dataInicial = new Date(valorDataInicial);
        const dataFinal = new Date(valorDataFinal);

        // Etapa 3
        const diferencaEmDias =
            (dataFinal.getTime() - dataInicial.getTime())
            / (1000 * 60 * 60 * 24);

        // Etapa 4
        return diferencaEmDias < intervalorMinimo
            ? {
                    intervaloData: {
                        atual: diferencaEmDias,
                        min: intervalorMinimo
                    }
            }
            : null;
    };
}