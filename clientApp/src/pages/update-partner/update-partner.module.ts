import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UpdatePartnerPage } from './update-partner';

import { PartnerService } from '../../providers/partner-service';

@NgModule({
  declarations: [
    UpdatePartnerPage,
  ],
  providers: [
    PartnerService
    
  ],
  imports: [
    IonicPageModule.forChild(UpdatePartnerPage),
  ],
})
export class UpdatePartnerPageModule {}
