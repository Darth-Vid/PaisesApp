import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/paises.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-paises-tabla',
  templateUrl: './paises-tabla.component.html'
})
export class PaisesTablaComponent{

  constructor(private paisService: PaisService) { }

  @Input()
  paises: Country[] = [];

}
