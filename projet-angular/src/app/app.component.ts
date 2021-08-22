import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'projet-angular';
  secondes:number = 0;
  counterSubscription!: Subscription;

  constructor() {}

  ngOnInit(){
    const source = interval(1000);
    this.counterSubscription = source.subscribe(val => this.secondes=val);
    /* Ce n'est pas vraiment comme la vidéo mais cela fonctionne de la même façon 
    (la vidéo date de 2018, les choses ont donc changées)*/
  }
  ngOnDestroy(){
    this.counterSubscription.unsubscribe();
  }

}
