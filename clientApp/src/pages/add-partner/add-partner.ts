import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { PartnerService} from '../../providers/partner-service';


/**
 * Generated class for the AddPartnerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-partner',
  templateUrl: 'add-partner.html',
})
export class AddPartnerPage {

  myForm: FormGroup;

  partner: any = {name:'',email:'',phone:'',createUid: null,country: {id: null}};

  name: string;
  email: string;
  phone: string; 
  createUid: number; 
  countryId: number;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public partnerService: PartnerService, public formBuilder: FormBuilder) {
                
                this.myForm = this.createMyForm();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPartnerPage');

    //this.createUid= currentUser;

  }

  saveData(){
    console.log(this.myForm.value);

    this.partner= {name: this.name,email: this.email ,phone: this.phone ,createUid: this.createUid ,country: {id: this.countryId}};

    this.partnerService.add(this.partner).subscribe(response => {
      console.log("Se añadio");
    });

    this.name="";
    this.email="";
    this.phone="";
    //este null podemos quitarlo porque siempre se mostrara el que esta conectado al momento.
    this.createUid=null;
    this.countryId=null;
    

  }
  
  private createMyForm(){
    return this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9]+.[a-zA-Z0-9-.]+$')
      ])],
      phone: ['', Validators.required],
      currentUser: ['', Validators.required],
      country: ['', Validators.required]
    });
  }
}
