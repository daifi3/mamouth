import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconsComponent } from './icons.component';
import { MIconModule } from '../../../../projects/ui/src/lib/m-icon';
import { MBannerModule } from '../../../../projects/ui/src/lib/m-banner';



@NgModule({
  declarations: [
    IconsComponent
  ],
  imports: [
    CommonModule,
    MIconModule,
    MBannerModule
  ],
  exports: [
    IconsComponent
  ]
})
export class IconsModule { }
