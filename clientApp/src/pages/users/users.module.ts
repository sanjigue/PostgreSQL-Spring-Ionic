import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UsersPage } from './users';

import { UserService } from '../../providers/user-service';

@NgModule({
  declarations: [
    UsersPage,
  ],
  providers: [
    UserService
    
  ],
  imports: [
    IonicPageModule.forChild(UsersPage),
  ],
})
export class UsersPageModule {}
