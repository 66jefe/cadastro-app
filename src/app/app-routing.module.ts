import { PessoaUpdateComponent } from './components/views/pessoa/pessoa-update/pessoa-update.component';
import { PessoaDeleteComponent } from './components/views/pessoa/pessoa-delete/pessoa-delete.component';
import { PessoaCreateComponent } from './components/views/pessoa/pessoa-create/pessoa-create.component';
import { PessoaReadComponent } from './components/views/pessoa/pessoa-read/pessoa-read.component';
import { HomeComponent } from './components/views/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'listar',
    component: PessoaReadComponent
  }, 
  {
    path: 'listar/create',
    component: PessoaCreateComponent
  },
  {
    path: 'listar/delete/:id',
    component: PessoaDeleteComponent
  },
  {
    path: 'listar/update/:id',
    component: PessoaUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
