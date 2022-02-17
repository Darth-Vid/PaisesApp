import { Component } from '@angular/core';
import { Country } from '../../interfaces/paises.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [`li {cursor: pointer;}`
  ]
})
export class PorPaisComponent{

  constructor( private paisService: PaisService ) { }

  termino:string = ''
  placeHolder: string = '';
  mostrarSugerencias: boolean = false;

  hayError: boolean = false;
  paises: Country[] = [];
  paisesSugeridos: Country[] = [];

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
    this.termino = termino;
    this.mostrarSugerencias = true;

    this.paisService.buscarPais(termino)
    .subscribe(paises => this.paisesSugeridos = paises.splice(0,3),
    (err) => this.paisesSugeridos = [])
  }

  buscarSugerido(termino: string){

    this.mostrarSugerencias = false;
    this.buscar(termino);

  }

}
