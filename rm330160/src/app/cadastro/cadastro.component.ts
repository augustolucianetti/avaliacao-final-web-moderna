import { Component } from '@angular/core';
import { IPessoa } from './../interfaces/interface.pessoa';
import { PessoaService } from '../services/pessoa.service';
 

@Component({
    moduleId: module.id,
    templateUrl: 'views/cadastro.component.html'
})
export class CadastroComponent {

    //para um evento selecionado
    public pessoaSelecionada: IPessoa;
    private novaPessoa: IPessoa;

    //para a inclusão de um novo evento
    public novo() {
        this.novaPessoa = { cpf: '', nome: '', telefone: 0, email: '' }
        this.pessoaSelecionada = this.novaPessoa;
    }
    public incluir(pessoa: IPessoa) {
        //this.listaPessoas.push(evento);
        this.pessoaService
            .setEventoWS(pessoa)
            .subscribe(
                res => JSON.stringify(res), 
                error => alert(error),
                () => this.listar());
        alert('Contato incluído com sucesso');
    }

    public listar(): void{
        this.pessoaService.getEventosWS()
        .subscribe(
            res =>  this.listaPessoas = res, 
            error => alert(error), 
            () => console.log('finalzado'));
    }

    public selecionar(item: IPessoa): void {
        this.pessoaSelecionada = item;
    }

    //lista de eventos
    public listaPessoas: IPessoa[];

    constructor(private pessoaService: PessoaService) {
        //this.listaEventos = eventosService.getEventos();
        this.listar();
    }
}