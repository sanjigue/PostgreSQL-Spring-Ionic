import { Component } from '@angular/core';
import { NavController, Tabs } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToTabs(){
    this.navCtrl.push(TabsPage);
  }
}
