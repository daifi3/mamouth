import { AfterContentInit, AfterViewInit, Component, ElementRef, HostBinding, Input, ViewChild } from '@angular/core';

export enum InputType {
  Text = 'text',
  Password = 'password',
  TextArea = 'textArea',
  Number = 'Number',
  Email = 'email',
  DateRange = 'dateRange',
  Time = 'time',
  Select = 'select'
}
@Component({
  selector: 'm-input',
  templateUrl: './m-input.component.html',
  styleUrls: ['./m-input.component.scss']
})
export class MInputComponent{
  private _type: InputType = InputType.Text;
  public types = InputType;

  private _placeHolder!: string;
  private _isDisabled!: boolean;

  private _emphasis: string = 'High' ;
  private _width: number = 220;
  private _items!: any[];
  private _bindLabel!: string;
  private _bindValue!: string; 
  public isShowed: boolean = false;
  
  @Input() public set type(value: InputType) {
    this._type = value;
  }

  public get type(): InputType {
    return this._type;
  }

  @Input() public set items(value: any[]) {
    if(this.type === InputType.Select){
      this._items = value;
    }else {
      console.error(`[Mamouth] Type Error: [type] must be set to InputType.Select `)
    }
  }

  public get items(): any[] {
    return this._items;
  }

  @Input() public set bindLabel(value: string) {
    this._bindLabel = value;
  }

  public get bindLabel(): string {
    return this._bindLabel;
  }

  @Input() public set bindValue(value: string) {
    this._bindValue = value;
  }

  public get bindValue(): string {
    return this._bindValue;
  }

  @Input() public set width(value: number) {
    this._width = value;
  }

  public get width(): number {
    return this._width;
  }

  @Input() public set placeHolder(value: string) {
    this._placeHolder = value;
  }

  public get placeHolder(): string {
    return this._placeHolder;
  }

  @Input() public set isDisabled(value: boolean) {
    this._isDisabled = value;
  }

  public get isDisabled(): boolean {
    return this._isDisabled;
  }

  @Input() public set emphasis(value: string) {
    this._emphasis = value;
  }

  public get emphasis(): string {
    return this._emphasis;
  }


  @ViewChild('password') private password!: ElementRef;
  @ViewChild('number') private number!: ElementRef;
  @ViewChild('menu') private menu!: ElementRef;
  public constructor() {
  }
 


  public togglePassword(): void {
    this.isShowed = !this.isShowed;
    if(this.isShowed) {
      this.password.nativeElement?.setAttribute('type','text');
    }else {
      this.password.nativeElement?.setAttribute('type','password');

    }
  }

    public increment(): void {
      if(this.number.nativeElement.value.length === 0) {
        this.number.nativeElement.value = '1'; 
      }
      if(this.number.nativeElement.value.length >=  1) {
         const value = this.number.nativeElement.value;
        const number = Number.parseInt(value) + 1;
        this.number.nativeElement.value = number;
      }
    
    }

    public decrement(): void {
      if(this.number.nativeElement.value.length === 0) {
        this.number.nativeElement.value = '-1'; 
      }
      if(this.number.nativeElement.value.length >=  1) {
         const value = this.number.nativeElement.value;
        const number = Number.parseInt(value) - 1;
        this.number.nativeElement.value = number;
      }
    }


    public toggleMenu(): void {
    }


  @HostBinding('class.disabled') public get getDisabledHost() {
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

  @HostBinding('class.text') get inputText() {
    return this.type === InputType.Text;
  }

  @HostBinding('class.password') get inputPassword() {
    return this.type === InputType.Password;
  }
}
