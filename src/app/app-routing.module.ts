import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Produto01Component } from './components/produto01.component';
import { ProdutosComponent } from './components/produtos.component';
import { Produto02Component } from './components/produto02.component';

const routes: Routes = [
  {path: 'produtos',  component: ProdutosComponent,  children: [
    {path: 'produto01', component: Produto01Component},
    {path: 'produto02', component: Produto02Component}
  ]},
];

@NgModule({
  declarations: [
    ProdutosComponent
  ],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
