import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDialogComponent } from './m-dialog.component';
import { MIconModule } from '../m-icon';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    MDialogComponent
  ],
  imports: [
    CommonModule,
    BrowserModule
    ]
  
})
export class MDialogModule { }
