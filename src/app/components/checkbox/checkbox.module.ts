import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxComponent } from './checkbox.component';
import { MCheckboxModule } from '../../../../projects/ui/src/lib/m-checkbox';

 

@NgModule({
  declarations: [
    CheckboxComponent
  ],
  imports: [
    CommonModule,
    MCheckboxModule
  ],
  exports:[
    CheckboxComponent
  ]
})
export class CheckboxModule { }
