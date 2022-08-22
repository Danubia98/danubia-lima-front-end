import { EditarLivroComponent } from './components/editar-livro/editar-livro.component';
import { EditarAutorComponent } from './components/editar-autor/editar-autor.component';
import { CadastrarLivroComponent } from './components/cadastrar-livro/cadastrar-livro.component';
import { CadastrarAutorComponent } from './components/cadastrar-autor/cadastrar-autor.component';
import { ListarLivrosComponent } from './components/listar-livros/listar-livros.component';
import { ListarAutorComponent } from './components/listar-autor/listar-autor.component';
import {NgModule} from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {path: 'listar-autor', component:ListarAutorComponent},
  {path: 'listar-livros', component:ListarLivrosComponent},
  {path:'cadastrar-autor', component:CadastrarAutorComponent},
  {path:'cadastrar-livro', component:CadastrarLivroComponent},
  {path: 'editar-autor', component:EditarAutorComponent},
  {path:'editar-livro', component:EditarLivroComponent}


]

@NgModule({
    declarations:[],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}
