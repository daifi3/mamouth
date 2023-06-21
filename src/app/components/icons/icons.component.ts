import { Component } from '@angular/core';
import { BannerStatus } from 'projects/ui/src/lib/models';
import { icons } from './icons-names';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent {
    public icons = icons;
    public selectedIcon!: string;
    public showBanner: boolean = false;

    public status = BannerStatus;

    public getIcon(icon: string): void {
      this.showBanner = true;
      this.selectedIcon = icon;
    }

    public onBannerClose(): void  {
       this.showBanner = false;
    }
}
 