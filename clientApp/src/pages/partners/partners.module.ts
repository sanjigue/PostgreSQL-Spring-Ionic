import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PartnersPage } from './partners';

import { PartnerService } from '../../providers/partner-service';

@NgModule({
  declarations: [
    PartnersPage,
  ],
  providers: [
    PartnerService
    
  ],
  imports: [
    IonicPageModule.forChild(PartnersPage),
  ],
})
export class PartnersPageModule {}
