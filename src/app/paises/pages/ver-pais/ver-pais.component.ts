import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { Country, Translation } from '../../interfaces/paises.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  constructor(
    private activatedRoutes: ActivatedRoute,
    private paisService: PaisService) { }

  paises!: Country[];
  ngOnInit(): void {

    this.activatedRoutes.params
    .pipe(
      switchMap(( param ) => this.paisService.buscarPaisAlpha(param['codigoPais']))
    )
    .subscribe(
      pais => { 
        this.paises = pais;
      });
    
  }
}
