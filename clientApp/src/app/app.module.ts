import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { AddPartnerPage } from '../pages/add-partner/add-partner';

import { GalleryPageModule } from '../pages/gallery/gallery.module';

import { PartnersPageModule } from '../pages/partners/partners.module';
import { AddPartnerPageModule } from '../pages/add-partner/add-partner.module';
import { UpdatePartnerPageModule } from '../pages/update-partner/update-partner.module';
import { PartnerService } from '../providers/partner-service';

import { UsersPageModule } from '../pages/users/users.module';
import { AddUserPageModule } from '../pages/add-user/add-user.module';
import { UpdateUserPageModule } from '../pages/update-user/update-user.module';
import { UserService } from '../providers/user-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    //AddPartnerPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    PartnersPageModule,
    UsersPageModule,
    AddPartnerPageModule,
    AddUserPageModule,
    UpdatePartnerPageModule,
    UpdateUserPageModule,
    GalleryPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    //AddPartnerPage
  ],
  providers: [PartnerService,
    UserService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
