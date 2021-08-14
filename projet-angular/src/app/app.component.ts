import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'projet-angular';

  isAuth = false;

  lastUpdate = new Date();

  appareils = [
    {
      name:'Machine à laver',
      status: 'éteint'
    },
    {
      name:'Télévision',
      status: 'allumé'
    },
    {
      name:'Ordinateur',
      status: 'éteint'
    }
  ]

  constructor(){
    setTimeout(
      ()=> {
        this.isAuth = true;
      },4000
    );
  }
  onAllumer(){
    console.log('On allume tout');
  }
}
