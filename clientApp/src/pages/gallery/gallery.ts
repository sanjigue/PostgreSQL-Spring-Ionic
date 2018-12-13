import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

/**
 * Generated class for the GalleryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gallery',
  templateUrl: 'gallery.html',
})
export class GalleryPage {

  private images: Array<string> = new Array(8);

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GalleryPage');
    this.presentLoadingDefault();
    
  }

  presentLoadingDefault() {
    let loading = this.loadingCtrl.create({
      content: 'Loading...'
    });
  
    loading.present();
  
    setTimeout(() => {
      loading.dismiss();
      document.getElementById("galleryHiden").style.visibility = "visible";
    }, 2000);

  }


  ver(image){
    console.log(image);
  }
}
