import { Pipe, PipeTransform } from '@angular/core';
import { PARTIDOS_MOCK } from './partidos-mock';

@Pipe({
  name: 'partidoFilter'
})
export class PartidoFilterPipe implements PipeTransform {

  transform(siglaPartido: string, showPartidoExtenso: boolean): string {
   
    let partidos = PARTIDOS_MOCK;

    let newValue = '';

    if(showPartidoExtenso) {
      for (var i = 0; i < partidos.length; i++){
        if (partidos[i].sigla === siglaPartido){
           newValue += siglaPartido + ' - ' + partidos[i].extenso;
           return newValue;
        }
      }
    
      if (newValue === '') {
        newValue += siglaPartido + " - Desconhecido";
        return newValue;
      }
      
    } else {
      return siglaPartido;
    }
  }
}
