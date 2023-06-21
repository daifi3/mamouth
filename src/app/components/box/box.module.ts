import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxComponent } from './box.component';
import { MBoxModule } from '../../../../projects/ui/src/lib/m-box';



@NgModule({
  declarations: [
    BoxComponent
  ],
  imports: [
    CommonModule,
    MBoxModule
  ],
  exports: [
    BoxComponent
  ]
})
export class BoxModule { }
