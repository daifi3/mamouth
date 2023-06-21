import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input.component';
import { MInputModule } from '../../../../projects/ui/src/lib/m-input';
import { MIconModule } from 'projects/ui/src/lib/m-icon';



@NgModule({
  declarations: [
    InputComponent
  ],
  imports: [
    CommonModule,
    MInputModule,
    MIconModule
  ],
  exports: [
    InputComponent
  ]
})
export class InputModule { }
