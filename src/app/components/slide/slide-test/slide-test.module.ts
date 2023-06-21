import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideTestComponent } from './slide-test.component';
import { MButtonModule } from '../../../../../projects/ui/src/lib/m-button';



@NgModule({
  declarations: [
    SlideTestComponent
  ],
  imports: [
    CommonModule,
    MButtonModule
  ],
  exports:[
    SlideTestComponent
  ]
})
export class SlideTestModule { }
