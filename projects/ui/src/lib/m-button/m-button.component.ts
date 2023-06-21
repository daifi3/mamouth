import { AfterContentInit, AfterViewInit, Component, ElementRef, EventEmitter, HostBinding, Input, Output, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'm-button',
  templateUrl: './m-button.component.html',
  styleUrls: ['./m-button.component.scss']
})
export class MButtonComponent {
  private _textColor: string = '';
  private _backgroundColor: string = '';
  private _emphasis: string = 'High';
  private _isDisabled: boolean = false;

  @Input() public set textColor(value: string) {
       this._textColor = value;
  }

  public get textColor(): string {
    return this._textColor
  }

  @Input() public set backgroundColor(value: string) {
    this._backgroundColor = value;
  }

  public get backgroundColor(): string {
    return this._backgroundColor;
  }

  @Input() public set emphasis(value: string) {
    this._emphasis = value;
  }

  public get emphasis(): string {
    return this._emphasis;
  }

  @Input() public set isDisabled(value: boolean) {
    this._isDisabled = value;
    this.isDisabledHost;
  }

  public get isDisabled(): boolean {
    return this._isDisabled;
  }

  @Output() public mClick: EventEmitter<void> = new EventEmitter<void>();


  public constructor(private renderer: Renderer2) {

  }

  public emitClick(): void {
    this.mClick.emit();
  }



  @HostBinding('class.isDisabled') get isDisabledHost() {
    return this.isDisabled;
  }

  @HostBinding('class.emphasis-high') get emphasisHigh() {
    return this.emphasis === 'High';
  }

  @HostBinding('class.emphasis-medium') get emphasisMedium() {
    return this.emphasis === 'Medium'
  }

  @HostBinding('class.emphasis-low') get emphasisLow() {
    return this.emphasis === 'Low'
  }

  @HostBinding('class.emphasis-xlow') get emphasisxLow() {
    return this.emphasis === 'xLow'
  }

  @HostBinding('class.emphasis-xxlow') get emphasisxxLow() {
    return this.emphasis === 'xxLow'
  }

}
