import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Validators } from '@angular/forms';

import { PartnerService} from '../../providers/partner-service';
import { NgForm } from '@angular/forms';

import { Partner } from '../../models/partner';

/**
 * Generated class for the UpdatePartnerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-update-partner',
  templateUrl: 'update-partner.html',
})
export class UpdatePartnerPage {

  partner: Partner = new Partner();

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public partnerService: PartnerService) {

      this.partner = this.navParams.get('partner');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpdatePartnerPage');
  }


  save(form: NgForm){
    this.partnerService.update(form, this.partner.id).subscribe(
      result => {
        this.navCtrl.pop();
      }, 
      error => console.log(error)
    );
  }
}
