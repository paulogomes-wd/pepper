import { Component } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  cuisines;

  constructor (public database: AngularFireDatabase){
    database.list('/cuisines').subscribe(data => {
      this.cuisines = data;
      console.log(this.cuisines);
    });
  }
}
