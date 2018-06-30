import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GrupoComponent } from './grupo/grupo.component';
import { SelecaoComponent } from './selecao/selecao.component';
import { Routes, RouterModule } from '@angular/router';


const routes : Routes = [
  
  { path : 'grupo', component : GrupoComponent },
  { path : 'selecao', component : SelecaoComponent },
];

@NgModule({
  exports : [
    RouterModule
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class RouteModule { }
