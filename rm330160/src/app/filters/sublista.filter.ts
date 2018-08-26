import { Pipe, PipeTransform } from '@angular/core';
import { IPessoa } from '../interfaces/interface.pessoa';
@Pipe({
    name: 'sublista'
})
export class SubLista implements PipeTransform {
    transform(pessoas: IPessoa[], input: string): IPessoa[] {
        return pessoas.filter(
            pessoa =>
                pessoa.nome.toLowerCase().includes(input.toLowerCase()));
    }
}