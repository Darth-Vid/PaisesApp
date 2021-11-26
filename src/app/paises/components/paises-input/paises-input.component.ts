import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';


@Component({
  selector: 'app-paises-input',
  templateUrl: './paises-input.component.html'
})
export class PaisesInputComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.debouncer
    .pipe(
      debounceTime(700)
    )
    .subscribe( valor =>{
      this.onDebounce.emit( valor );
    } )
  }

  @Output() 
  onEnter: EventEmitter<string> = new EventEmitter();
  
  @Output()
  onDebounce: EventEmitter<string> = new EventEmitter();

  @Input()
  placeHolder: string ='';

  debouncer: Subject<string> = new Subject();

  termino: string = '';


  buscar(){
    this.onEnter.emit( this.termino );
  }

  teclaPresionada(){
    this.debouncer.next( this.termino );
  }

}
