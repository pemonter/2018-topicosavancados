import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { GrupoComponent } from './grupo/grupo.component';
import { SelecaoComponent } from './selecao/selecao.component';
import { RouteModule } from './/route.module';
import { GrupoService } from './grupo/grupo.service';
import { SelecaoService } from './selecao/selecao.service';


@NgModule({
  declarations: [
    AppComponent,
    GrupoComponent,
    SelecaoComponent
  ],
  imports: [
    BrowserModule,
    RouteModule,
    FormsModule
  ],
  providers: [GrupoService, SelecaoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
