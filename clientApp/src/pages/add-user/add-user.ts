import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { UserService } from '../../providers/user-service';

import { LocalService} from '../../providers/local-service';

/**
 * Generated class for the AddUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-user',
  templateUrl: 'add-user.html',
})
export class AddUserPage {

  myForm: FormGroup;

  user: any = {
    login: '', password: '', partner: {

      name: '', email: '', phone: '', createUid: null, country: {id : null}
    }

  };

  userLocal: any = {login: '', password: ''};

  login: string;
  password: string;
  name: string;
  phone: string;
  createUid: number;
  countryId: number;



  constructor(public navCtrl: NavController, public navParams: NavParams,
    public userService: UserService, public formBuilder: FormBuilder, public localService: LocalService) {

      this.myForm = this.createMyForm();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddUserPage');
  }

  saveData() {
    console.log(this.myForm.value);

    this.user = {
      login: this.login, password: this.password, partner: {

        name: this.name, email: this.login, phone: this.phone, createUid: this.createUid, countryId: this.countryId
      
      }
    };

    this.userLocal={login: this.login, password: this.password};

    //this.localService.create(this.userLocal);

    this.userService.add(this.user).subscribe(response => {
      console.log("Se añadio");
    });

    this.name = "";
    this.login = "";
    this.phone = "";
    this.password = "";
    this.countryId = null;
    //este null podemos quitarlo porque siempre se mostrara el que esta conectado al momento.
    this.createUid = null;

  }

  private createMyForm() {
    return this.formBuilder.group({
      name: ['', Validators.required],
      login: ['', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9]+.[a-zA-Z0-9-.]+$')
      ])],
      password: ['', Validators.required],
      phone: ['', Validators.required],
      currentUser: ['', Validators.required],
      country: ['', Validators.required]
    });
  }
}
