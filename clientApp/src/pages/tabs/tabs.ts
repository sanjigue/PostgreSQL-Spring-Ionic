import { Component } from '@angular/core';
import { IonicPage, NavController, MenuController } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the TabsPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  partnersRoot = 'PartnersPage'
  usersRoot = 'UsersPage'


  constructor(public navCtrl: NavController, public menu: MenuController) {}

  openMenu() {
    this.menu.open();
  }

  closeMenu() {
    this.menu.close();
  }

  toggleMenu() {
    this.menu.toggle();
  }
  logout(){
    console.log("Loged out");
    this.navCtrl.pop();
  }
}
