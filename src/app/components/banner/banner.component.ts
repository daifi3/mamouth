import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { MBannerComponent } from 'projects/ui/src/lib/m-banner';
import { BannerStatus } from 'projects/ui/src/lib/models';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {

  public success: BannerStatus = BannerStatus.Success;
  public warning: BannerStatus = BannerStatus.Warning;
  public error: BannerStatus = BannerStatus.Error;

  public onClick(): void {
    console.warn('heyy')
  }

}
