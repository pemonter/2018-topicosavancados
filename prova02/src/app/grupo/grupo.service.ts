import { Injectable } from '@angular/core';
import { Grupo } from './grupo';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class GrupoService {

  private grupos : Grupo[] = [];

  constructor() { }

  addGrupo(grupo : Grupo) {
    this.grupos.push(grupo);
    this.grupos.sort(this.sortGruposByName) 
  }

  getGrupos() : Observable<Grupo[]> {
    return of(this.grupos);
  }

  updateGrupo(grupo : Grupo) {
    let existGrupo= this.grupos.find(gru => gru.id == grupo.id);
    existGrupo.name = grupo.name; 
    this.grupos.sort(this.sortGruposByName) 
  }

  deleteGrupo(grupo: Grupo) {
    let index = this.grupos.indexOf(grupo);
    this.grupos.splice(index, 1);
  }

  sortGruposByName(grupoA: Grupo, grupoB: Grupo) {
    if (grupoA.name.toLowerCase() == grupoB.name.toLowerCase()) {
      return 0;
    }
  
    if (grupoA.name.toLowerCase() < grupoB.name.toLowerCase()) {
      return -1;
    }
    
    return 1;
  }
}
