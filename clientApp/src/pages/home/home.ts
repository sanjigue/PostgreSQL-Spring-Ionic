import { Component } from '@angular/core';
import { NavController, Tabs } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PartnersPage } from '../partners/partners';
import { AddUserPage } from '../add-user/add-user';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  myForm: FormGroup;

  user: any = {
    login:'',
    password:''
  };

  login: string;
  password: string;

  constructor(public navCtrl: NavController, public formBuilder: FormBuilder) {
    this.myForm = this.createMyForm();
  }

  goToTabs(){

    
    this.navCtrl.push(TabsPage,{login: this.login, "parentPage": this});
    

  }

  private createMyForm() {
    return this.formBuilder.group({

      login: ['', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9]+.[a-zA-Z0-9-.]+$')
      ])],
      password: ['', Validators.required]
      
    });
  }
  goToSignUp(){
    this.navCtrl.push(AddUserPage);

  }
}
