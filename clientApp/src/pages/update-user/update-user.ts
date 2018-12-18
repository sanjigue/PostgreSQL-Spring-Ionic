import { Component, ɵConsole } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Validators } from '@angular/forms';

import { UserService} from '../../providers/user-service';
import { NgForm } from '@angular/forms';

import { User } from '../../models/user';



@IonicPage()
@Component({
  selector: 'page-update-user',
  templateUrl: 'update-user.html',
})
export class UpdateUserPage {

  user: User = new User();

  userForm: any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public userService: UserService) {

      this.user = this.navParams.get('user');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpdateUserPage');

    
  }

  save(form: NgForm){

    // this.userForm= form;
    // this.user.login= this.userForm.login;
    // this.user.password = this.userForm.password;


    this.userService.update(form, this.user.id).subscribe(
      result => {
        console.log('Actualizado user');
        this.navCtrl.pop();
      }, 
      error => console.log(error)
    );
  }

}
