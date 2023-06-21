import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadioButtonComponent } from './radio-button.component';
import { MRadioButtonModule } from '../../../../projects/ui/src/lib/m-radio-button';



@NgModule({
  declarations: [
    RadioButtonComponent
  ],
  imports: [
    CommonModule,
    MRadioButtonModule
  ],
  exports: [
    RadioButtonComponent
  ]
})
export class RadioButtonModule { }
