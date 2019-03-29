import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Practica4Page } from '../practica4/practica4';


/**
 * Generated class for the Practica3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-practica3',
  templateUrl: 'practica3.html',
})
export class Practica3Page {
  datos={
    v1:null,
    v2:null,
    res:null
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Practica3Page');
  }
  next(){
    this.navCtrl.push(Practica4Page);
  }
  area(){
    var v1=parseInt(this.datos.v1);
    var v2=parseInt(this.datos.v2);
    var res=parseInt(this.datos.res);
    alert('El area es:  '+(res=(v1*v2)/2));
  }

}
