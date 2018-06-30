import { Component, OnInit } from '@angular/core';
import { Grupo } from './grupo';
import { GrupoService } from './grupo.service';

@Component({
  selector: 'app-grupo',
  templateUrl: './grupo.component.html',
  styleUrls: ['./grupo.component.css']
})
export class GrupoComponent implements OnInit {

  newGrupo : Grupo;
  grupos : Grupo[];
  
  showMessageErrorName : boolean;
 
   constructor(private grupoService : GrupoService) { }
 
   ngOnInit() {
     this.newGrupo = new Grupo();
     this.showMessageErrorName = false;
     this.loadGrupos();
   }
 
   loadGrupos() {
     this.grupoService.getGrupos().subscribe(
       grupos => this.grupos = grupos
     );
   }
 
   saveGrupo() {
    if (this.allFieldsValid()) {
      if (!this.newGrupo.id) {
        this.newGrupo.id = (new Date()).getTime();
        this.grupoService.addGrupo(this.newGrupo);
      } else {
        this.grupoService.updateGrupo(this.newGrupo);
      }
  
      this.newGrupo = new Grupo();
    }
  }

   allFieldsValid() {
    this.showMessageErrorName = false;
  
    if (!this.newGrupo.name || this.newGrupo.name.trim() == '') {
      this.showMessageErrorName= true;
    }

    return !this.showMessageErrorName;
  }
 
   editGrupo(grupo: Grupo) {
     this.newGrupo = new Grupo(
       grupo.id, grupo.name
     );
   }
 
   deleteGrupo(grupo: Grupo) {
     this.grupoService.deleteGrupo(grupo);
     this.loadGrupos();
   }
}
