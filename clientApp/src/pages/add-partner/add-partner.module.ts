import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddPartnerPage } from './add-partner';

import { PartnerService } from '../../providers/partner-service';

@NgModule({
  declarations: [
    AddPartnerPage,
  ],
  providers: [
    PartnerService
    
  ],
  imports: [
    IonicPageModule.forChild(AddPartnerPage),
  ],
})
export class AddPartnerPageModule {}
