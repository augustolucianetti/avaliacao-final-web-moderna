import { Injectable } from '@angular/core';
import { IPessoa } from '../interfaces/interface.pessoa';

import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';

@Injectable()
export class PessoaService {

    //acesso ao HTTP
    public constructor(private _http: Http) { }

    private url: string = "http://localhost:3200/contatos";

    public getEventosWS(): Observable<IPessoa[]> {
        return this._http
            .get(this.url)
            .map(res => res.json());
    }

    public setEventoWS(pessoa: IPessoa): Observable<IPessoa> {
        let header = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: header });

        let json = JSON.stringify({
            cpf: pessoa.cpf,
            nome: pessoa.nome,
            telefone: pessoa.telefone,
            email: pessoa.email
        });

        return this._http
            .post(this.url, json, options)
            .map(res => res.json());
    }


    public getEventos(): IPessoa[] {
        return [
            { cpf: 'Avaliação Angular', nome: '23/10/2018', telefone: 0, email: 'augusto@hotmail.com' },
            { cpf: 'Formatura', nome: '02/05/2020', telefone: 140 , email: 'felipe@hotmail.com'},
            { cpf: 'Torneio de Tenis', nome: '10/07/2018', telefone: 210, email: 'felipe@hotmail.com'},
            { cpf: 'Congresso de TI', nome: '16/01/2019', telefone: 400,email: 'felipe@hotmail.com' }
        ];
    }
}