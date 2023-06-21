import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MBoxComponent } from './m-box.component';



@NgModule({
  declarations: [
    MBoxComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ 
    MBoxComponent
  ]
})
export class MBoxModule { }
