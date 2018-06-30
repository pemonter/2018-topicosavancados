import { Injectable } from '@angular/core';
import { Selecao } from './selecao';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class SelecaoService {

  private selecoes : Selecao[] = [];

  constructor() { }

  addSelecao(selecao : Selecao) {
    this.selecoes.push(selecao);
    this.selecoes.sort(this.sortSelecoesByName)
  }

  getSelecoes() : Observable<Selecao[]> {
    return of(this.selecoes);
  }

  updateSelecao(selecao : Selecao) {
    let existSelecao= this.selecoes.find(sel => sel.id == selecao.id);
    existSelecao.name = selecao.name;
    existSelecao.group = selecao.group; 
    this.selecoes.sort(this.sortSelecoesByName)   
  }

  deleteSelecao(selecao: Selecao) {
    let index = this.selecoes.indexOf(selecao);
    this.selecoes.splice(index, 1);
  }

  sortSelecoesByName(selecaoA: Selecao, selecaoB: Selecao) {
    if (selecaoA.name.toLowerCase() == selecaoB.name.toLowerCase()) {
      return 0;
    }
  
    if (selecaoA.name.toLowerCase() < selecaoB.name.toLowerCase()) {
      return -1;
    }
    
    return 1;
  }

}
