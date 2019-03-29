import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Practica5Page } from '../practica5/practica5';

/**
 * Generated class for the Practica4Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-practica4',
  templateUrl: 'practica4.html',
})
export class Practica4Page {
  datos={
    v1:null,
    v2:null,
    res:null
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Practica4Page');
  }
  next(){
    this.navCtrl.push(Practica5Page);
  }
  suma(){
    var v1=parseInt(this.datos.v1);
    var v2=parseInt(this.datos.v2);
    var res=parseInt(this.datos.res);
    alert('La suma es:  '+(res=(v1+v2)));

  }
  resta(){
    var v1=parseInt(this.datos.v1);
    var v2=parseInt(this.datos.v2);
    var res=parseInt(this.datos.res);
    alert('La resta es:  '+(res=(v1-v2)));

  }
  mult(){
    var v1=parseInt(this.datos.v1);
    var v2=parseInt(this.datos.v2);
    var res=parseInt(this.datos.res);
    alert('El producto es:  '+(res=(v1*v2)));

  }
  div(){
    var v1=parseInt(this.datos.v1);
    var v2=parseInt(this.datos.v2);
    var res=parseInt(this.datos.res);
    alert('La divicion es:  '+(res=(v1/v2)));

  }

}
