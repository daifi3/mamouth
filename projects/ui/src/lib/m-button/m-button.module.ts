import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MButtonComponent } from './m-button.component';



@NgModule({
  declarations: [
    MButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports:  [
    MButtonComponent
  ]
})
export class MButtonModule { }
