import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideComponent } from './slide.component';
import { SlideTestModule } from './slide-test/slide-test.module';
import { MButtonModule } from '../../../../projects/ui/src/lib/m-button';



@NgModule({
  declarations: [
    SlideComponent
  ],
  imports: [
    CommonModule,
    SlideTestModule,
    MButtonModule
  ],
  exports: [
    SlideComponent
  ]
})
export class SlideModule { }
