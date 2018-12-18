import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

import { PartnerService } from '../../providers/partner-service';
import { AddPartnerPage } from '../add-partner/add-partner';
import { UpdatePartnerPage } from '../update-partner/update-partner';
import { Partner } from '../../models/partner';
import { TabsPage } from '../tabs/tabs';


/**
 * Generated class for the PartnersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-partners',
  templateUrl: 'partners.html',
})
export class PartnersPage {

  private partners: Array<any>;
  partnerId: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public partnerService: PartnerService, public toastCtrl: ToastController) {

  }

  ionViewDidLoad() {

    console.log('ionViewDidLoad PartnersPage');
    this.chargeAll();

  }

  chargeAll() {
    this.partnerService.getAllPartners().subscribe(partners => {
      this.partners = partners;
    },
      (error: any) => {
        this.presentToast();
      });
  }



  deletePartnerButton(id) {
    console.log("PAPA ME DIO EL ID: " + id);
    this.partnerService.remove(id).subscribe(response => {
      console.log("DELETEADO PAPA");
      this.chargeAll();
    });

  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'No hay conexion con el servidor.',
      duration: 5000,
      position: 'bot'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

  updatePartner(partner: Partner) {
    // console.log("ID: " + id);
    // this.partnerId = id;

    this.navCtrl.push(UpdatePartnerPage, { partner: partner, "parentPage": this })
  }

  goToAdd() {
    console.log("fui a add partner");
    this.navCtrl.push(AddPartnerPage);
  }

}

