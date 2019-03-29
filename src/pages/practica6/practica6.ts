import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Practica6Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-practica6',
  templateUrl: 'practica6.html',
})
export class Practica6Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Practica6Page');
  }
  id(){        
    alert("id:  1");
  }  
  nombre(){    
    alert("nombre: Eduardo Bollas");
    
  }

}
