import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button.component';
import { MButtonModule } from '../../../../projects/ui/src/lib/m-button';



@NgModule({
  declarations: [
    ButtonComponent
  ],
  imports: [
    CommonModule,
    MButtonModule
  ],
  exports: [
    ButtonComponent
    ]
})
export class ButtonModule { }
