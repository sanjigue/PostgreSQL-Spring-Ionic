import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { PartnerService } from '../../providers/partner-service';
import { AddPartnerPage } from '../add-partner/add-partner';
import { UpdatePartnerPage } from '../update-partner/update-partner';
import { Partner } from '../../models/partner';


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
    this.chargeAll();
  }

  chargeAll(){
    this.partnerService.getAllPartners().subscribe(partners => {
      this.partners = partners;
    })
  }



  deletePartnerButton(id){
    console.log("PAPA ME DIO EL ID: "+id);
     this.partnerService.remove(id).subscribe(response => {
       console.log("DELETEADO PAPA");
       this.chargeAll();
     });
     
  }

  updatePartner(partner: Partner) {
    // console.log("ID: " + id);
    // this.partnerId = id;

    this.navCtrl.push(UpdatePartnerPage,{partner: partner, "parentPage": this})
  }

  goToAdd(){
    console.log("fui a add partner");
    this.navCtrl.push(AddPartnerPage);
  }
  
}

