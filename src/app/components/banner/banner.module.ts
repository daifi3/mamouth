import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner.component';
import { MButtonModule } from '../../../../projects/ui/src/lib/m-button';
import { MBannerModule } from '../../../../projects/ui/src/lib/m-banner';



@NgModule({
  declarations: [
    BannerComponent
  ],
  imports: [
    CommonModule,
    MButtonModule,
    MBannerModule
  ],
  exports: [
    BannerComponent
  ]
})
export class BannerModule { }
