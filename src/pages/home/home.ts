import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Practica2Page } from '../practica2/practica2';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  btn1(){
    alert("Color Rojo");
  }
  btn2(){
    alert("Color Amarillo");

  }
  btn3(){
    alert("Color Azul");

  }
  btn4(){
    alert("Color Gris");

  }
  next(){
    this.navCtrl.push(Practica2Page);
  }
 
}
