import { Component, OnInit, Input } from '@angular/core';
import { Carta } from './carta';
import { ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  @ViewChild('nome') inputElement : ElementRef;

  title = 'app';

  cartas : Carta[] = [];

  currentCarta: Carta;

  newCarta : Carta;

  constructor() {
    this.newCarta= new Carta();
  }

  saveCarta() {

    if (this.checkcarta(this.newCarta)) {
      let cartaToSave = new Carta();
      cartaToSave.nomeRemetente = this.newCarta.nomeRemetente;
      cartaToSave.endRemetente = this.newCarta.endRemetente;
      cartaToSave.cepRemetente = this.newCarta.cepRemetente;
      cartaToSave.nomeDestinatario = this.newCarta.nomeDestinatario;
      cartaToSave.endDestinatario = this.newCarta.endDestinatario;
      cartaToSave.cepDestinatario = this.newCarta.cepDestinatario;
      cartaToSave.conteudo = this.newCarta.conteudo;

      this.cartas.push(cartaToSave);

      this.clearFields();
      
      this.inputElement.nativeElement.focus();
    }
  }
  
  clearFields(){
    this.newCarta.nomeRemetente = '';
    this.newCarta.endRemetente = '';
    this.newCarta.cepRemetente = '';
    this.newCarta.nomeDestinatario = '';
    this.newCarta.endDestinatario = '';
    this.newCarta.cepDestinatario = '';
    this.newCarta.conteudo = '';
  }

  checkcarta(carta: Carta) {
    if (carta.nomeRemetente && carta.endRemetente && carta.cepRemetente &&
        carta.nomeDestinatario && carta.endDestinatario && carta.cepDestinatario &&
        carta.conteudo) {

              return true;
    }
    window.alert("Por favor preencha todos os campos.")
    this.inputElement.nativeElement.focus();
    return false;
  }
}
