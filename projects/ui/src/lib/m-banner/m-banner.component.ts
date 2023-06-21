import { Component, ComponentRef, ElementRef, EventEmitter, HostBinding, Input, OnDestroy, Output, Renderer2, ViewChild, ViewContainerRef } from '@angular/core';
import { BannerStatus } from '../models/banner-status.enum';

@Component({
  selector: 'm-banner',
  templateUrl: './m-banner.component.html',
  styleUrls: ['./m-banner.component.scss']
})
export class MBannerComponent implements OnDestroy {
    private banner_status!: BannerStatus;
    private is_notification: boolean = false;
    private hide_close_button: boolean = false;
    private _closeDelay: number = 1000;
    private _dynamicContent!: string ;

  @ViewChild('banner') public banner!: ElementRef;

  @Input() public set status(value: BannerStatus) {
     this.banner_status = value;
  }

  public get status(): BannerStatus {
    return this.banner_status;
  }

  @Input() public set isNotification(value: boolean) {
    this.is_notification = value;
 }

 public get isNotification(): boolean {
   return this.is_notification;
 }

 @Input() public set closeAfter(value: number) {
  this._closeDelay = value;
  if(this.hideCloseButton) {
    this.autoClose();
  }
}

public get closeAfter(): number {
 return this._closeDelay;
}

 @Input() public set hideCloseButton(value: boolean) {
  this.hide_close_button = value;

}

public get hideCloseButton(): boolean {
 return this.hide_close_button;
}

@Input() public set dynamicContent(value: string) {
  this._dynamicContent = value;
}

public get dynamicContent(): string {
 return this._dynamicContent;
}

 @Output() public bannerClose: EventEmitter<void> = new EventEmitter<void>();


  public constructor(private renderer: Renderer2) {
      
  }

  public ngOnDestroy(): void {
  }

  public onClick(): void {
    this.bannerClose.emit();
    this.close();
  }

  private autoClose(): void{
     setTimeout(() => {
      this.close();
     }, this.closeAfter);
  }

  private close(): void {
    this.renderer.removeChild(this.banner.nativeElement.parentNode.parentNode,this.banner.nativeElement.parentNode)
  }

  
    @HostBinding('class.success') public get statusSuccess() {
        return this.banner_status == BannerStatus.Success;
    }

    @HostBinding('class.warning') public get statusWarning() {
      return this.banner_status == BannerStatus.Warning;
    }

    @HostBinding('class.neutral') public get statusNeutral() {
      return this.banner_status == BannerStatus.Neutral;
    }


    @HostBinding('class.error') public get statusError() {
      return this.banner_status == BannerStatus.Error;
    }

    @HostBinding('class.notification') public get notification() {
      return this.isNotification;
    }
}
