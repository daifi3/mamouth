import { NgModule } from '@angular/core';
import { MBannerModule } from './m-banner/m-banner.module';
import { MBoxModule } from './m-box/m-box.module';
import { MButtonModule } from './m-button/m-button.module';
import { MCheckboxModule } from './m-checkbox/m-checkbox.module';
import { MDialogModule } from './m-dialog/m-dialog.module';
import { MIconModule } from './m-icon';
import { MInputModule } from './m-input';
import { MRadioButtonModule } from './m-radio-button';
import { MPortalService } from './services';
import { MdialogService } from './services/dialog-service.service';
import { UiComponent } from './ui.component';



@NgModule({
  declarations: [
    UiComponent
  ],
  imports: [
    MButtonModule,
    MBannerModule,
    MCheckboxModule,
    MRadioButtonModule,
    MInputModule,
    MIconModule,
    MBoxModule
  ],
  exports: [
    UiComponent,
    MButtonModule,
    MBannerModule,
    MCheckboxModule,
    MRadioButtonModule,
    MInputModule,
    MIconModule,
    MBoxModule
  ]
})
export class UiModule { }
