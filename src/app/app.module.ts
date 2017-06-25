import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppComponent } from './app.component';

export const firebaseConfig = {
    apiKey: "AIzaSyAST9UHyZOqoH4V_m2nVUhFZqfCHlTf6qQ",
    authDomain: "pepper-48d41.firebaseapp.com",
    databaseURL: "https://pepper-48d41.firebaseio.com",
    projectId: "pepper-48d41",
    storageBucket: "",
    messagingSenderId: "109834548692"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
