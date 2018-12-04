import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { PartnerService } from '../../providers/partner-service';
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
              public partnerService: PartnerService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PartnersPage');
    this.partnerService.getAllPartners().subscribe(partners => {
      this.partners = partners;
    })
  }

  deletePartnerButton(id){
    console.log("PAPA ME DIO EL ID: "+id);
     this.partnerService.remove(id).subscribe(response => {
       console.log("DELETEADO PAPA");
       this.ionViewDidLoad();
     });
     
  }

  getItemId(id: any) {
    console.log("ID: " + id);
    this.partnerId = id;

  }
}
