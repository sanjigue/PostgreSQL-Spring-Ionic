import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';


import { UserService} from '../../providers/user-service';

import { LocalService} from '../../providers/local-service';

import { AddUserPage } from '../add-user/add-user';
import { UpdateUserPage } from '../update-user/update-user';
import { User } from '../../models/user';

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

  fallo: any = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public userService: UserService, public toastCtrl: ToastController, public localService: LocalService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsersPage');
    this.localService.createDatabase();
    this.chargeAll();
   
  }

  chargeAllLocal(){
    this.localService.getAll().then(users =>{
      this.users = users;
    })
  }

  chargeAll(){
    this.chargeAllServer();
    
  }

  chargeAllServer(){
    this.userService.getAllUsers().subscribe(users => {
      this.users = users;
    },
    (error: any) => {
      
      this.presentToast();
      
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
      //this.chargeAllLocal();
    });

    toast.present();
  }

  deleteUserButton(id){
    console.log("ME DIO EL ID: "+id);

    //this.localService.delete(id);

     this.userService.remove(id).subscribe(response => {
       console.log("DELETEADO");
       this.ionViewDidLoad();
     });

  }

  goToUpdate(user: User){
    this.navCtrl.push(UpdateUserPage,{user: user, "parentPage": this})
  }

  goToAdd(){
    console.log("fui a add user");
    this.navCtrl.push(AddUserPage);
  }
}
