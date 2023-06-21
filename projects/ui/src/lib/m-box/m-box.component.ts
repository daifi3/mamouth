import { Component, ElementRef, Input, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'm-box',
  templateUrl: './m-box.component.html',
  styleUrls: ['./m-box.component.scss']
})
export class MBoxComponent {
    private _header!: string;
    private _collapsible!: boolean;
    private _collapsed: boolean = false;
    private _backColor!: string;
    private _headerBackColor!: string;
    private _width!: number;
    private _height!: number;
    @ViewChild('container') private container!: ElementRef;
    @ViewChild('chevron') private chevron!: ElementRef
    
    @Input() public set header(value: string) {
      this._header = value;
    }

    public get header(): string {
      return this._header
    }

    @Input() public set collapsible(value: boolean) {
      this._collapsible = value;
    }

    public get collapsible(): boolean {
      return this._collapsible;
    }

    @Input() public set backColor(value: string) {
      this._backColor = value;
    }

    public get backColor(): string {
      return this._backColor;
    }

    @Input() public set headerBackColor(value: string) {
      this._headerBackColor = value;
    }

    public get headerBackColor(): string {
      return this._headerBackColor;
    }

    @Input() public set width(value: number) {
      this._width = value;
    }

    public get width(): number {
      return this._width;
    }

    @Input() public set height(value: number) {
      this._height = value;
    }

    public get height(): number {
      return this._height;
    }

    public constructor(private renderer: Renderer2) {

    }

    public toggleBox(): void {
      this._collapsed = !this._collapsed;
      console.warn(this._collapsed)
      if(this._collapsed) {
          this.renderer.setStyle(this.container.nativeElement,'height','40px');
          this.renderer.setStyle(this.chevron.nativeElement,'transform','rotate(-180deg)')
      }else{
        this.renderer.setStyle(this.container.nativeElement,'height', this.height ? `${this.height}px`: '100%');
        this.renderer.setStyle(this.chevron.nativeElement,'transform','rotate(0)')

      }
    }
}
