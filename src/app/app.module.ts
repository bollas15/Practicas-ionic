import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, Transition } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Practica2Page } from '../pages/practica2/practica2';
import { Practica3Page } from '../pages/practica3/practica3';
import { Practica4Page } from '../pages/practica4/practica4';
import { Practica5Page } from '../pages/practica5/practica5';
import { Practica6Page } from '../pages/practica6/practica6';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Practica2Page,
    Practica3Page,
    Practica4Page,    
    Practica5Page,
    Practica6Page
   
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Practica2Page,
    Practica3Page,
    Practica4Page,
    Practica5Page,
    Practica6Page  
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
    
   

  ]
})
export class AppModule {}
