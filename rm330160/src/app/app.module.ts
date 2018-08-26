import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { HttpModule } from '@angular/http';

import { appRoutes } from './rotas/app.routes'; //deve vir primeiro

import { AppComponent }  from './app.component';
import { MenuComponent } from './menu/menu.component';
import { SubLista } from './filters/sublista.filter';

//usado nas rotas
import { HomeComponent } from './home/home.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ErroComponent } from './erro/erro.component';
import { PessoaService } from './services/pessoa.service';

@NgModule({
  //imports -> usada para módulos
  imports:      [ BrowserModule,
                  RouterModule.forRoot(appRoutes),
                  FormsModule, 
                  HttpModule ],

  //declarations -> usada para componentes
  declarations: [ AppComponent, 
                  MenuComponent,
                  HomeComponent,
                  CadastroComponent,
                  ErroComponent, 
                  SubLista ],

  providers : [ PessoaService ],
  //bootstrap: define o componente inicial
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
