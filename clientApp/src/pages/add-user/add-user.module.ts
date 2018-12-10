import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddUserPage } from './add-user';

import { UserService } from '../../providers/user-service';

@NgModule({
  declarations: [
    AddUserPage,
  ],
  providers: [
    UserService
    
  ],
  imports: [
    IonicPageModule.forChild(AddUserPage),
  ],
})
export class AddUserPageModule {}
