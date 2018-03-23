import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cepFilter'
})
export class CepFilterPipe implements PipeTransform {

  transform(cep: String): String {

  let newValue = cep.substring(0, 2) + '.' +
  cep.substring(2, 5) + '-' +
  cep.substring(5) ;

  return newValue;
  }
}