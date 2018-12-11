import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UpdateUserPage } from './update-user';

import { UserService } from '../../providers/user-service';

@NgModule({
  declarations: [
    UpdateUserPage,
  ],
  providers: [
    UserService
    
  ],
  imports: [
    IonicPageModule.forChild(UpdateUserPage),
  ],
})
export class UpdateUserPageModule {}
