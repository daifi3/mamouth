import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './dialog.component';
import { MButtonModule } from '../../../../projects/ui/src/lib/m-button';



@NgModule({
  declarations: [
    DialogComponent
  ],
  imports: [
    CommonModule,
    MButtonModule
  ],
  exports: [
    DialogComponent
  ]
})
export class DialogModule { }
