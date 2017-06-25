import { Component } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor (public database: AngularFireDatabase){
    console.log(database);
  }
}
