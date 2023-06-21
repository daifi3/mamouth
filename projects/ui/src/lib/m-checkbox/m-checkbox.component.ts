import { Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';

@Component({
  selector: 'm-checkbox',
  templateUrl: './m-checkbox.component.html',
  styleUrls: ['./m-checkbox.component.scss']
})
export class MCheckboxComponent {
    private _isDisabled: boolean = false;
    private _isChecked: boolean = false;

    @Input() public set isDisabled(value: boolean) {
      this._isDisabled = value;
    }

    public get isDisabled(): boolean {
      return this._isDisabled;
    }

    @Input() public set isChecked(value: boolean) {
      this._isChecked = value;
    }

    public get isChecked(): boolean {
      return this._isChecked;
    }

    @Output() public mCheck: EventEmitter<boolean> = new EventEmitter<boolean>();

  public constructor() {

  }

  public change(): void {
    this.isChecked = ! this.isChecked;
    if(this.isChecked){
      this.mCheck.emit(true);
    }
    else{
      this.mCheck.emit(false);

    }
  }


  @HostBinding('class.disabled') public get isDisabledHost() {
    return this.isDisabled;
  }
}
