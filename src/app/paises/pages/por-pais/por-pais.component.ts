import { Component } from '@angular/core';
import { Country } from '../../interfaces/paises.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent{

  constructor( private paisService: PaisService ) { }


  termino:string = ''
  placeHolder: string = '';

  hayError: boolean = false;
  paises: Country[] = [];

  buscar(termino: string){

    this.hayError = false;
    this.termino = termino;

    this.paisService.buscarPais( termino )
      .subscribe( (paises) => {
        this.paises = paises;

      }, 
    (err) =>{

      this.hayError =true;
      this.paises = [];
    } );

  }

  sugerencias( termino: string ){
    this.hayError = false;
  }

}
