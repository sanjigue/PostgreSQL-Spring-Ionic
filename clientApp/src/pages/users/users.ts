import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { UserService} from '../../providers/user-service';
import { AddUserPage } from '../add-user/add-user';

/**
 * Generated class for the UsersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {

  private users: Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public userService: UserService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsersPage');

    this.chargeAll();
  }

  chargeAll(){
    this.userService.getAllUsers().subscribe(users => {
      this.users = users;
    })
  }

  deleteUserButton(id){
    console.log("ME DIO EL ID: "+id);
     this.userService.remove(id).subscribe(response => {
       console.log("DELETEADO");
       this.ionViewDidLoad();
     });
     
  }

  goToAdd(){
    console.log("fui a add user");
    this.navCtrl.push(AddUserPage);
  }
}
