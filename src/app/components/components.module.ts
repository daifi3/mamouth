import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from './button/button.module';
import { BannerModule } from './banner/banner.module';
import { SlideModule } from './slide/slide.module';
import { CheckboxModule } from './checkbox/checkbox.module';
import { RadioButtonModule } from './radio-button/radio-button.module';
import { InputModule } from './input/input.module';
import { IconsModule } from './icons/icons.module';
import { DialogModule } from './dialog/dialog.module';
import { BoxModule } from './box/box.module';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ButtonModule,
    BannerModule,
    SlideModule, 
    CheckboxModule,
    RadioButtonModule,
    InputModule,
    IconsModule
  ],
  exports: [
    ButtonModule,
    BannerModule,
    SlideModule,
    CheckboxModule,
    RadioButtonModule,
    InputModule,
    IconsModule,
    DialogModule,
    BoxModule
  ]
})
export class ComponentsModule { }
