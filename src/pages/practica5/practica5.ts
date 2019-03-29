import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { Practica6Page } from '../practica6/practica6';

/**
 * Generated class for the Practica5Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-practica5',
  templateUrl: 'practica5.html',
})
export class Practica5Page {
  
 

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Practica5Page');
  }

  contactos(){
      
    alert("id:  1\nnombre: Eduardo Bollas");    
  }

  next(){
    this.navCtrl.push(Practica6Page);
  }


}
