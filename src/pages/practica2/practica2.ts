import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Practica3Page } from '../practica3/practica3';

/**
 * Generated class for the Practica2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-practica2',
  templateUrl: 'practica2.html',
})
export class Practica2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Practica2Page');
  }
  next(){
    this.navCtrl.push(Practica3Page);
  }

}
