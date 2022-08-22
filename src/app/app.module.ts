import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'


import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { ListarAutorComponent } from './components/listar-autor/listar-autor.component';
import { ListarLivrosComponent } from './components/listar-livros/listar-livros.component';
import { CadastrarAutorComponent } from './components/cadastrar-autor/cadastrar-autor.component';
import { CadastrarLivroComponent } from './components/cadastrar-livro/cadastrar-livro.component';
import { EditarAutorComponent } from './components/editar-autor/editar-autor.component';
import { EditarLivroComponent } from './components/editar-livro/editar-livro.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarAutorComponent,
    ListarLivrosComponent,
    CadastrarAutorComponent,
    CadastrarLivroComponent,
    EditarAutorComponent,
    EditarLivroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
