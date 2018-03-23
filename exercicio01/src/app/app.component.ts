import { Component, OnInit, Input } from '@angular/core';
import { Candidato } from './candidato';
import { ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  @ViewChild('nome') inputElement : ElementRef;

  title = 'app';

  candidatos : Candidato[] = [];

  currentCandidato : Candidato;

  newCandidato : Candidato;

  constructor() {
    this.newCandidato = new Candidato();
  }

  saveCandidato() {

    if (this.checkCandidato(this.newCandidato)) {
      let candidatoToSave = new Candidato();
      candidatoToSave.nome = this.newCandidato.nome;
      candidatoToSave.partido = this.newCandidato.partido;
      candidatoToSave.profissao = this.newCandidato.profissao;

      this.candidatos.push(candidatoToSave);

      this.clearFields();
      
      this.inputElement.nativeElement.focus();
    }
  }
  
  clearFields(){
    this.newCandidato.nome = '';
    this.newCandidato.partido = '';
    this.newCandidato.profissao = '';
  }

  checkCandidato(candidato: Candidato) {
    if (candidato.nome && candidato.partido && candidato.profissao) {
      return true;
    }
    window.alert("Por favor preencha todos os campos.")
    this.inputElement.nativeElement.focus();
    return false;
  }

  removeCandidato(candidato: Candidato) {
    let candidatoToRemove = this.candidatos.indexOf(candidato)
    this.candidatos.splice(candidatoToRemove, 1)

    this.inputElement.nativeElement.focus();
  }
}
